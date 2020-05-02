<template>
  <section class="col-md-10 col-xs-12" style="margin: auto">
  <h1 class="form-group row d-flex justify-content-center mb-2">Vállalkozói adatok</h1>
  <ValidationObserver v-slot="{ handleSubmit }" slim>
    <form @submit.prevent="handleSubmit(onSubmit)">
      <fieldset>
        <div class="form-group row col-lg-12">
          <div class="col-lg-3 mb-2">
            <label for="offer-category">Kategória</label>
            <validation-provider rules="required" v-slot="v">
            <select class="form-control form-input" id="offer-category" name="ajánlat kategória" v-model="offer_category">
              <option v-for="category in categories" v-bind:value="category">
                {{ category.name }}
              </option>
            </select>
              <span>{{ v.errors[0] }}</span>
            </validation-provider>
            <span>Kiválasztott: {{ offer_category }}</span>
          </div>

          <div class="col-lg-9 mb-2">
            <label for="offer-name">Ajánlat neve</label>
            <validation-provider rules="required" v-slot="{ errors }">
            <input
              class="form-control form-control-lg form-input"
              id="offer-name"
              type="text"
              name="ajánlat neve"
              v-model="offer_name"
              placeholder="Ajánlat neve"
            />
              <span>{{ errors[0] }}</span>
            </validation-provider>
          </div>

          <div class="col-lg-12 mb-2">
            <label for="offer-description">Ajánlat leírása</label>
            <validation-provider rules="required" v-slot="{ errors }">
            <textarea
              class="form-control form-control-lg form-input"
              id="offer-description"
              type="text"
              maxlength="255"
              name="ajánlat leírása"
              v-model="offer_description"
              placeholder="Ajánlat leírása"
            />
              <span>{{ errors[0] }}</span>
            </validation-provider>
          </div>

          <div class="col-lg-12 mb-2">
            <FileUpload label="Kép" maxPictureCount="1" :change="getFiles"></FileUpload>
          </div>

          <div class="d-flex align-items-center col-lg-2 mb-2" v-for="(input,k) in offer_prices" :key="k">
            <input required="true" v-mask="['# Ft', '## Ft', '### Ft', '#### Ft', '##### Ft', '###### Ft', '####### Ft']"
                   type="tel" class="form-control form-control-lg form-input" v-model="input.price">
            <i class="fas fa-minus-circle" @click="remove(k)" v-show="k || ( !k && offer_prices.length > 1)"></i>
            <i class="fas fa-plus-circle" @click="add(k)" v-show="k === offer_prices.length-1 && k < 5"></i>
          </div>

          <div class="col-lg-12">
            <button type="submit" class="btn btn-lg btn-primary pull-xs-right">
              Feltöltöm
            </button>
          </div>

        </div>
      </fieldset>
    </form>
  </ValidationObserver>
  </section>

</template>

<script>
  import FileUpload from "./FileUpload";
  import {
    ValidationProvider,
    ValidationObserver,
    extend,
    localize,
    configure
  } from "vee-validate/dist/vee-validate.full";
  import { mapGetters } from "vuex";
  import { FETCH_CATEGORIES, UPLOAD_OFFER } from "../store/actions.type";
  import hu from "vee-validate/dist/locale/hu.json";
  import {mask} from 'vue-the-mask'

  localize("hu", hu);

  export default {
    name: "OfferCreationContainer",
    components: {
      ValidationProvider,
      ValidationObserver,
      FileUpload
    },
    directives: {mask},
    mounted() {
      this.$store.dispatch(FETCH_CATEGORIES);
      this.offer_category = this.categories.find(Boolean);
    },
    data() {
      return {
        offer_category: {},
        offer_name: "",
        offer_picture: [],
        offer_description: "",
        offer_prices: [
          {
            price: null
          }
        ]
      };
    },
    computed: {
      ...mapGetters(["categories"])
    },
    methods: {
      add(index) {
        this.offer_prices.push({ price: null });
      },
      remove(index) {
        this.offer_prices.splice(index, 1);
      },
      onSubmit() {
        this.$store
          .dispatch(UPLOAD_OFFER, {
            user_id: 1,
            category_id: this.offer_category.category_id,
            name: this.offer_name,
            picture: this.offer_picture,
            description: this.offer_description
            // prices: this.offer_prices,
          })
          .then(() => this.$router.push({ name: "home" }));
      },
      getFiles(files) {
        if (files) {
          this.offer_picture = files;
        }
      }
    }
  };
</script>

<style scoped>

</style>
