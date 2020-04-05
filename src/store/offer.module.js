import { FETCH_OFFER } from "./actions.type";
import { SET_OFFER } from "./mutations.type";
import { OfferService } from "../common/api.service";

const state = {
  offer: []
};

const getters = {
  offer(state) {
    return state.offer;
  }
};

const actions = {
  async [FETCH_OFFER](context, offerId) {
    const { data } = await OfferService.getOffer(offerId);
    context.commit(SET_OFFER, data);
    return data;
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [SET_OFFER](state, response) {
    state.offer = response;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
