import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: "home",
      path: "/",
      meta: {
        auth: false
      },
      component: () => import("@/views/Index")
    },
    {
      name: "login",
      path: "/login",
      meta: {
        auth: false
      },
      component: () => import("@/views/Login")
    },
    {
      name: "register",
      path: "/register",
      meta: {
        auth: false
      },
      component: () => import("@/views/Register")
    },
    {
      name: "about",
      path: "/about",
      meta: {
        auth: false
      },
      component: () => import("@/views/About")
    },
    {
      name: "faq",
      path: "/faq",
      meta: {
        auth: false
      },
      component: () => import("@/views/Faq")
    },
    {
      name: "invite",
      path: "/invite",
      meta: {
        auth: false
      },
      component: () => import("@/views/Invite")
    },
    {
      name: "offer",
      path: "/ajanlat/:offerSlug",
      meta: {
        auth: false
      },
      component: () => import("@/views/SingleOfferView")
    },
    {
      name: "offers",
      path: "/ajanlatok",
      meta: {
        auth: false
      },
      component: () => import("@/views/Offers")
    },
    {
      name: "create-offer",
      path: "/ajanlat-keszites",
      meta: {
        auth: true
      },
      component: () => import("@/views/CreateOffer")
    },

    { path: '*', redirect: '/' }

    // Handle child routes with a default, by giving the name to the
    // child.
    // SO: https://github.com/vuejs/vue-router/issues/777
  ]

});
