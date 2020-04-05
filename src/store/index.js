import Vue from "vue";
import Vuex from "vuex";

import home from "./home.module";
import offer from "./offer.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    offer
  }
});
