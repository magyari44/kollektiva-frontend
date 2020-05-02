import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import { CHECK_AUTH } from "./store/actions.type";
import ApiService from "./common/api.service";
import DateFilter from "./common/date.filter";
import ErrorFilter from "./common/error.filter";

Vue.config.productionTip = false;
//Vue.filter("date", DateFilter);
//Vue.filter("error", ErrorFilter);


ApiService.init();

// Ensure we checked auth before each page load.
//router.beforeEach((to, from, next) =>
//  Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
//);

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/', '/ajanlatok', '/ajanlat/*', '/invite', '/faq', '/about'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
