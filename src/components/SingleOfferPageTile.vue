<template>
  <div class="page_tile-container general-container">
    <div class="tile-inner_container">
      <div class="cover-container">
        <div class="cover-image">
          <img :src="offer.picture" />
        </div>
        <div class="support-wrapper"></div>
      </div>

      <div class="offer-details_container">
        <div class="offer-title">
          {{ offer.name }}
        </div>
        <div class="offer-category"></div>
        <div class="offer-description">
          {{ offer.description }}
        </div>
      </div>

      <div class="offer-connection_container">
        <div class="connection-title"></div>
        <div class="contact-point_wrapper">
          <ul>
            <li>Cim: 4324, Varos, Utca hazszam.</li>
            <li>Telefonszám</li>
          </ul>
        </div>
      </div>

      <div class="informing-container">
        <div class="informing-box">
          <div class="informing-container_title">
            Miért fontos most a segítséged?
          </div>
          <div class="informing-container_description">
            Azonnali segitsegnyujtas for the owner to cover rent and running
            costs. You help to preserve jobs because our partners fight hard for
            their employees
          </div>
        </div>

        <div class="informing-box">
          <div class="informing-container_title">
            Fontos tudnivalók a vásárlással kapcsolatban
          </div>
          <div class="informing-container_description">
            Due to the current regulations, many restaurants have closed and are
            fighting for their existence. With the purchase of a voucher there
            is a risk that due to a possible bankruptcy.
            asd
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_OFFER } from "@/store/actions.type";
export default {
  name: "SingleOfferPageTile",
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchOffer()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchOffer'
  },
  methods: {
    fetchOffer () {
      this.$store.dispatch(FETCH_OFFER, this.$route.params.offerSlug);
    }
  },
  computed: {
    ...mapGetters(["offer"])
  }
};
</script>

<style scoped>
.page_tile-container {
  background: #f8f8f8;
  box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}
</style>
