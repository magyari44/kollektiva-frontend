<template>
  <div>
    <div class="col-md-12 pagination-container d-flex justify-content-end">
      <SlidingPagination
        :current="currentPage"
        :total="totalPages"
        @page-change="pageChangeHandler"></SlidingPagination>
    </div>
    <div class="col-md-12 offers-container d-flex flex-row">
      <div class="categories-container col-md-2 d-flex justify-content-center flex-column">
        <div class="d-flex justify-content-center"><h4>Kategóriák</h4></div>
        <CategoriesCheckboxes></CategoriesCheckboxes>
      </div>
      <div class="offers-container col-md-10">
        <OfferList></OfferList>
      </div>
    </div>
  </div>
</template>

<script>
  import SlidingPagination from 'vue-sliding-pagination'
  import SingleOfferTile from "./SingleOfferTile";
  import OfferList from "./OfferList";
  import CategoriesCheckboxes from "./CategoriesCheckboxes";


  export default {
    name: "OffersPageContainer",
    components: {
      CategoriesCheckboxes,
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
