import Vue from "vue";
import Router from "vue-router";
import welcome from "@/pages/welcome/welcome";
import register from "@/pages/register";
import login from "@/pages/login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "welcome",
      component: welcome
    },
    {
      path: "/register",
      name: "register",
      component: register
    },
    {
      path: "/login",
      name: "login",
      component: login
    }
  ]
});
