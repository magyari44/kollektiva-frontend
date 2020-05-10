<template>
  <div class="offer_list-container">
      <SingleOffer v-for="offer in featuredOffers" :offer="offer"></SingleOffer>
  </div>
</template>

<script>
import SingleOffer from "./SingleOfferTile";
import { mapGetters } from "vuex";
import { FETCH_ALL_OFFERS } from "@/store/actions.type";

export default {
  name: "OfferList",
  components: {
    SingleOffer
  },
  mounted() {
    this.$store.dispatch(FETCH_ALL_OFFERS);
  },
  computed: {
    ...mapGetters(["featuredOffers", "isLoading"])
  }
};
</script>

<style scoped>
.offer_list-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: space-between;
}
</style>
