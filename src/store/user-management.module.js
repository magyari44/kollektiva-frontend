import {
  REGISTER_USER,
} from "./actions.type";

import {
  SET_USER
} from "./mutations.type";

import {UserService} from "../common/api.service";

const state = {
  responseCode: true
};

const getters = {
  user(state) {
    return state.user;
  },
};

const actions = {
  [REGISTER_USER]({commit}, params) {
    commit(REGISTER_USER);

    let operation = {action: REGISTER_USER, successCode: 200};

    let payload = {
      type_id: params.type_id,
      email: params.email,
      password: params.password,
      name: params.name,
      phone: params.phone, //??????
      contact_name: params.contact_name,
      contact_email: params.contact_email,
      contact_phone: params.contact_phone, //?????
      description: params.description,
      postalcode: params.postalcode,
      city: params.city,
      address: params.address,
      mailing_address: params.mailing_address,
      invoice_postalcode: params.invoice_postalcode,
      invoice_city: params.invoice_city,
      invoice_address: params.invoice_address,
      vat_number: params.vat_number,
      bank_account: params.bank_account,
      logo: params.logo,
      teaor: params.teaor,
      link_website: params.link_website,
      link_facebook: params.link_facebook,
      link_instagram: params.link_instagram
    };
    return UserService.registerUser(payload)
      .then(response => {
        commit(SET_USER, response);
      })
      .catch(error => {
        commit();
        throw new Error(error);
      });
  },
};

const mutations = {
  [SET_USER](state, response) {
    state.responseCode = response;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
