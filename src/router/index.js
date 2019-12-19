import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, position) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (position) {
          resolve(position);
        } else {
          resolve({ x: 0, y: 0 });
        }
      }, 500);
    });
  }
});

export default router;
