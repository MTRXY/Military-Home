import Vue from "vue";
import Router from "vue-router";
import ProShopDemo from "@/components/ProShopDemo";
import register from "@/pages/register";
import login from "@/pages/login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "ProShopDemo",
      component: ProShopDemo
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
