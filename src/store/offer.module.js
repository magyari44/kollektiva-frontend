import { FETCH_OFFER,
  UPLOAD_OFFER
} from "./actions.type";

import { SET_OFFER, SET_USER } from "./mutations.type";
import { OfferService, UserService } from "../common/api.service";

const state = {
  offer: []
};

const getters = {
  offer(state) {
    return state.offer;
  }
};

const actions = {
  async [FETCH_OFFER]({ commit }, offerSlug) {
    const { data } = await OfferService.getOffer(offerSlug);
    commit(SET_OFFER, data);
    return data;
  },

  async [UPLOAD_OFFER]({commit}, params) {
    // commit(UPLOAD_OFFER);

    let payload = {
      user_id: 1,
      category_id: params.category_id,
      name: params.offer_name,
      picture: params.offer_picture,
      description: params.offer_description,
      // prices: this.offer_prices,
    };

    return OfferService.uploadSingleOffer(payload)
      .then(response => {
        commit(SET_OFFER, response);
      })
      .catch(error => {
        // commit();
        throw new Error(error);
      });

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
