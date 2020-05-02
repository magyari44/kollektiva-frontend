import {
  REGISTER_USER,
  LOGIN_USER
} from "./actions.type";

import {
  SET_USER
} from "./mutations.type";

import {UserService} from "../common/api.service";

export function getInitialState() {
  return {
    user: {
      username: "",
    },
    isAuthenticated: false,
    // ...asyncState(LOGIN_USER, REGISTER_USER)
  }
}

const state = getInitialState();

const getters = {
  user(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
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
  [LOGIN_USER]({commit}, params) {

    let operation = {action: LOGIN_USER, successCode: 200, mutation: loginUserCallback};

    let payload = {
      email: params.email,
      password: params.password,
    };
    return UserService.loginUser(payload)
      .then(response => {
        store.dispatch('parametricSearch/' + EAGER_FETCH_PRODUCTS, null).then(() => {
          commit(ASYNC_ACTION_END, toMutationPayload(operation, response));
          Utils.tackUserId(response.data.userId);
          console.log("parametric table data eagerly loaded.");
        }).catch(() => {
          console.warn("cannot eagerly load parametric table.");
          commit(ASYNC_ACTION_END, toMutationPayload(operation, response));
          Utils.tackUserId(response.data.userId);
        });
      })
      .catch(error => {
        commit(NO_RESPONSE_ERROR, toMutationPayload(operation, error.response));
        throw new Error(error);
      });
  },
};

const mutations = {
  [SET_USER](state, response) {
    state.responseCode = response;
  }
};

function loginUserCallback(state, response) {
  state.user = response.data;
  state.isAuthenticated = true;
}

export default {
  state,
  getters,
  actions,
  mutations
}
