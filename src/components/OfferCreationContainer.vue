<template>
  <div class="col-md-10 col-xs-12" style="margin: auto">
    <h1 class="text-xs-center">Ajánlatod adatai</h1>
    <form @submit.prevent="onSubmit">

      <fieldset class="form-group">
        <label for="registration-type">Kategória</label>
        <select class="form-control form-input" id="registration-type" v-model="offer_category">
          <option v-for="category in categories" v-bind:value="category">
            {{ category.name }}
          </option>
        </select>
        <span>Kiválasztott: {{ offer_category }}</span>
      </fieldset>

      <fieldset class="form-group">
        <input
          class="form-control form-control-lg form-input"
          type="text"
          v-model="offer_name"
          placeholder="Ajánlat neve"
        />
      </fieldset>

      <fieldset class="form-group">
        <input
          class="form-control form-control-lg form-input"
          type="text"
          v-model="offer_description"
          placeholder="Ajánlat leírása"
        />
      </fieldset>

      <fieldset class="form-group">
        <input
          class="form-control form-control-lg form-input"
          type="text"
          v-model="offer_picture"
          placeholder="Ajánlat képe"
        />
      </fieldset>

      <fieldset class="form-group" v-for="(input,k) in offer_prices" :key="k">
        <input type="text" class="form-control" v-model="input.price">
        <i class="fas fa-minus-circle" @click="remove(k)" v-show="k || ( !k && offer_prices.length > 1)"></i>
        <i class="fas fa-plus-circle" @click="add(k)" v-show="k === offer_prices.length-1"></i>
      </fieldset>


      <button type="submit" class="btn btn-lg btn-primary pull-xs-right">
        Feltöltöm
      </button>

    </form>
  </div>

</template>

<script>
  import { mapGetters } from "vuex";
  import { FETCH_CATEGORIES, UPLOAD_OFFER } from "../store/actions.type";

  export default {
    name: "OfferCreationContainer",
    mounted() {
      this.$store.dispatch(FETCH_CATEGORIES);
      this.offer_category = this.categories.find(Boolean);
    },
    data() {
      return {
        offer_category: {},
        offer_name: "",
        offer_picture: "",
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
      }
    }
  };
</script>

<style scoped>

</style>
