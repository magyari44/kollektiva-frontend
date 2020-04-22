import Vue from "vue";
import Vuex from "vuex";

import home from "./home.module";
import offer from "./offer.module";
import usermanagement from "./user-management.module";
import categories from "./categories.modules";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    offer,
    usermanagement,
    categories
  }
});
