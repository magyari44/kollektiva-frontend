<template>
  <div>
    <div class="col-md-12 pagination-container pull-xs-right">
      <SlidingPagination
        :current="currentPage"
        :total="totalPages"
        @page-change="pageChangeHandler"></SlidingPagination>
    </div>
    <div class="offers-container">
      <div class="categories-selector-container col-md-3"></div>
      <div class="offers-container col-md-9">
        <OfferList></OfferList>
      </div>
    </div>
  </div>
</template>

<script>
  import SlidingPagination from 'vue-sliding-pagination'
  import SingleOfferTile from "./SingleOfferTile";
  import OfferList from "./OfferList";


  export default {
    name: "OffersPageContainer",
    components: {
      SingleOfferTile,
      SlidingPagination,
      OfferList
    },
    data() {
      return {
        currentPage: 1,
        totalPages: 3
      }
    },
    methods: {
      pageChangeHandler(selectedPage) {
        this.currentPage = selectedPage
      }
    },


  };
</script>

<style scoped>

</style>
