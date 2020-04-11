import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("@/views/Index")
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/Login")
    },
    {
      name: "register",
      path: "/register",
      component: () => import("@/views/Register")
    },
    {
      name: "about",
      path: "/about",
      component: () => import("@/views/About")
    },
    {
      name: "faq",
      path: "/faq",
      component: () => import("@/views/Faq")
    },
    {
      name: "invite",
      path: "/invite",
      component: () => import("@/views/Invite")
    },
    {
      name: "offer",
      path: "/offer/:offerSlug",
      component: () => import("@/views/SingleOfferView")
    }
    // Handle child routes with a default, by giving the name to the
    // child.
    // SO: https://github.com/vuejs/vue-router/issues/777
  ]
});
