import { FETCH_ALL_OFFERS } from "./actions.type";
import { FETCH_START, FETCH_END } from "./mutations.type";
import { OfferService } from "../common/api.service";

const state = {
  featuredOffers: [],
  isLoading: true
};

const getters = {
  featuredOffers(state) {
    return state.featuredOffers;
  },
  isLoading(state) {
    return state.isLoading;
  }
};

const actions = {
  [FETCH_ALL_OFFERS]({ commit }, params) {
    commit(FETCH_START);
    return OfferService.getOffers(params)
      .then(({ data }) => {
        commit(FETCH_END, data);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state, response) {
    state.featuredOffers = response;
    state.isLoading = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
