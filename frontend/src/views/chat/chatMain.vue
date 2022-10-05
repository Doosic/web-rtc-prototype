<template>
  <div>
    <div v-model="roomName"></div>
    <v-btn>sd</v-btn>
  </div>
</template>

<script>


export default {
  name: "chatMain",
  data() {
    return {
      roomName: null,
      message: null
    }
  },
  methods: {
    test(){

    }
  }
}
</script>

<style scoped>

</style>