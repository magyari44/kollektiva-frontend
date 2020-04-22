import {
  FETCH_CATEGORIES, FETCH_OFFER
} from "./actions.type";

import {
  SET_CATEGORIES, SET_OFFER
} from "./mutations.type";

import { CategoriesService } from "../common/api.service";

const state = {
  categories: []
};

const getters = {
  categories(state) {
    return state.categories;
  },
};

const actions = {
  async [FETCH_CATEGORIES]({ commit }) {
    const { data } = await CategoriesService.getCategories();
    commit(SET_CATEGORIES, data);
    return data;
  }
};

const mutations = {
  [SET_CATEGORIES](state, response) {
    state.categories = response;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
