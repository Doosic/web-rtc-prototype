<template>
  <div>
  <v-card height="750px">
    <v-navigation-drawer
        absolute
        permanent
        right
    >
      <v-container class="fill-height">
      <v-row class="fill-height pb-14" align="end">
        <v-col>
          <div v-for="(item, index) in chat" :key="index"
               :class="['d-flex flex-row align-center my-2', item.from == 'user' ? 'justify-end': null]">
            <!-- 내 채팅 -->
            <span v-if="item.from == 'user'" class="blue--text mr-3">{{ item.msg }}</span>
            <v-avatar :color="item.from == 'user' ? 'indigo': 'red'" size="36">
              <span class="white--text">{{ item.from }} </span>
            </v-avatar>

            <!-- 다른사람 채팅 -->
            <span v-if="item.from != 'user'" class="blue--text ml-3">{{ item.msg }}</span>
          </div>
        </v-col>
      </v-row>
      </v-container>
      <v-footer fixed>
        <v-container class="ma-0 pa-0">
          <v-row no-gutters>
            <v-col>
              <div class="d-flex flex-row align-center">
                <v-text-field v-model="msg" placeholder="메세지를 입력해주세요." @keypress.enter="send"></v-text-field>
                <v-btn icon class="ml-4" @click="send"><v-icon>mdi-send</v-icon></v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </v-navigation-drawer>
  </v-card>

  </div>
</template>

<script>
export default {
  name: "chatRoom",
  created() {
    this.$socketIo.on('message', (data) => {
      this.chat.push(
          {
            from: "not user",
            msg: data
          })
      console.log('서버 메세지 도착: ',data);
    })
  },
  data: () => ({
      chat: [],
      msg: null,
  }),
  methods: {
    send: function () {
      this.$socketIo.emit('message', {
        message: this.msg
      })
      this.chat.push(
          {
            from: "user",
            msg: this.msg
          })
      this.msg = null

    },
  }
}
</script>

<style scoped>

</style>