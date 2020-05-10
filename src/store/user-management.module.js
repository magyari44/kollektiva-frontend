import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  CHECK_AUTH,
} from "./actions.type";

import {
  SET_USER,
  NO_RESPONSE_ERROR,
  SET_ERRORS,
  SET_TOKEN,
  UNAUTHORIZED,
  REGISTRATION,
  FAILED_REGISTRATION
} from "./mutations.type";

import ApiService, {UserService} from "../common/api.service";
import JwtService from "@/common/jwt.service";
import {toMutationPayload} from "./utils/async";
import { resetState } from "./utils/state-controller";


export function getInitialState() {
  return {
    user: {
      name: "",
      email: "",
      roles: [],
      username: "",
    },
    errors: null,
    isAuthenticated: false,
    // ...asyncState(LOGIN_USER, REGISTER_USER)
  }
}

const state = {
  user: {
    name: "",
    email: "",
    roles: [],
  },
  errors: {},
  isAuthenticated: !!JwtService.getToken()
}

// const state = getInitialState();

const getters = {
  user(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  errors(state) {
    return state.errors;
  }
};

const actions = {
  [REGISTER_USER]({commit}, params) {
    let operation = {action: REGISTER_USER, successCode: 200};

    let payload = {
      email: params.email,
      password: params.password,
      name: params.name,
      password_confirmation: params.password
    };
    return UserService.registerUser(payload)
      .then(response => {
        // commit(SET_USER, response);
      })
      .catch(error => {
        commit(FAILED_REGISTRATION, error.response.data);
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
      .then(function (response) {
          commit(SET_TOKEN, response.data);
          console.log(response);
      }).catch(error => {
        commit(UNAUTHORIZED, error.response.data);
        // console.log(error);
        throw new Error(error);
      });
  },

  [LOGOUT_USER]({commit}) {
    commit(LOGOUT_USER);
  },

  [CHECK_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.get("/current")
        .then(function (response) {
          context.commit(SET_USER, response.data);
          console.log(response);
        })
        .catch( response => {
          context.commit(SET_ERRORS, response.data.errors);
        });
    } else {
      context.commit(LOGOUT_USER);
    }
  },

};

const mutations = {
  [SET_TOKEN](state, data) {
    // state.responseCode = response;
    JwtService.saveToken(data.token);
    state.isAuthenticated = true;
  },

  [UNAUTHORIZED](state, data) {
    state.errors = data;
  },

  [SET_USER](state, data) {
    // state.responseCode = response;
    state.user.email = data.email;
    state.user.name = data.name;
    if(data.is_user === 1){
      state.user.roles.push("user");
    }
    if(data.is_company === 1){
      state.user.roles.push("company");
    }
    if(data.is_admin === 1){
      state.user.roles.push("admin");
    }

  },
  [LOGOUT_USER]() {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  },
  [SET_ERRORS](state, error) {
    state.errors = error;
  },
  [REGISTRATION](state, error) {
    //successfull registration
  },
  [FAILED_REGISTRATION](state, error) {
    state.errors = error;
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
