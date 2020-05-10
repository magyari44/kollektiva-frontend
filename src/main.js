import Vue from "vue";
import App from "./App.vue";
import router from "./router/kollektiva-router";
import store from "./store";
import "./registerServiceWorker";

import {
  CHECK_AUTH
} from "./store/actions.type";
import ApiService from "./common/api.service";
import DateFilter from "./common/date.filter";
import ErrorFilter from "./common/error.filter";

Vue.config.productionTip = false;
//Vue.filter("date", DateFilter);
//Vue.filter("error", ErrorFilter);


ApiService.init();

router.beforeEach((to, from, next) => {
    Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
})


// Ensure we checked auth before each page load.
// router.beforeEach((to, from, next) =>
//   Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
// );

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/', '/ajanlatok', '/ajanlat/*', '/invite', '/faq', '/about'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');
//
//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


export function authHandler(error = {}) {
  // if (error.hasOwnProperty('response') && error.response.hasOwnProperty('status')) {
  //   if (error.response.status === 401 || error.response.status === 403) {
  //     store.dispatch(LOGOUT_USER).then(() => myAmpleonRouter.push('/'));
  //   }
  // }
  return error;
}

export function checkResponseStatus(response = {}) {
  // if (response.hasOwnProperty('status') && response.hasOwnProperty('data')) {
  //   if (response.status === 200 && response.data.hasOwnProperty('success') && response.data.success === false) {
  //     throw new Error(`An error occurred while performing request: ${response.data.message}`);
  //   }
  // }
  return response;
}
