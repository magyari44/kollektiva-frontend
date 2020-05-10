<template>
  <div class="categories-container d-flex justify-content-center flex-column">
    <CategoryCheckbox  v-for="category in categories" :category="category"></CategoryCheckbox>
  </div>

</template>

<script>
  import { FETCH_CATEGORIES } from "../store/actions.type";
  import CategoryCheckbox from "./CategoryCheckbox";
  import { mapGetters } from "vuex";


  export default {
    name: "CategoriesCheckboxes",
    components: {
      CategoryCheckbox,
    },
    mounted() {
      this.$store.dispatch(FETCH_CATEGORIES);
    },
    computed: {
      ...mapGetters(["categories"])
    }
  };
</script>

<style scoped>

</style>
