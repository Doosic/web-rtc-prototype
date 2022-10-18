import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "createMeetingRoom",
    component: () =>
        import(/* webpackChunkName: "chatMain" */ "../views/room/createMeetingRoom")
  },
  {
    path: "/conference",
    name: "conferenceRoom",
    component: () =>
        import(/* webpackChunkName: "chatMain" */ "../views/videoConference/conferenceRoom")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
