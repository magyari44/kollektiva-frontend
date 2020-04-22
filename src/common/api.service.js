import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/jwt.service";
import { API_URL } from "@/common/config";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${JwtService.getToken()}`;
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;

export const OfferService = {
  getOffers() {
    return ApiService.get("/offers");
  },

  getOffer(resource, offerSlug) {
    return Vue.axios.get(`/offer/${resource}`).catch(error => {
      throw new Error(`[OfferService] ApiService ${error}`);
    });
  },

  uploadSingleOffer(params) {
    return Vue.axios.post("/create", params);
  }
};

export const UserService = {
  registerUser(params) {
    return Vue.axios.post("/register", params);
  }
};

export const CategoriesService = {
  getCategories() {
    return ApiService.get("/categories");
  }
}
