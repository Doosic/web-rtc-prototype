import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from './plugins/vuetify'
import vueMaterial from 'vue-material';
import io from 'socket.io-client'

var socket = io('http://localhost:8098');

Vue.use(vueMaterial);

Vue.config.productionTip = false;
Vue.prototype.$socketIo = socket;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
