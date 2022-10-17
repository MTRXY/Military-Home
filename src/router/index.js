import Vue from "vue";
import Router from "vue-router";
import ProShopDemo from "@/components/ProShopDemo";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "ProShopDemo",
      component: ProShopDemo
    }
  ]
});
