<template>
  <div class="category-checkbox-container">
    <input class="d-flex justify-content-start" type="checkbox" :id="category.category_id" v-model="category_id_checked">
    <label class=" checkbox d-flex justify-content-center" :for="category.category_id">{{ category.name }}</label>
  </div>
</template>

<script>
  export default {
    name: "CategoryCheckbox",
    props: ["category"],
    data: function() {
      return {
        category_id_checked: false,
      };
    }
  };
</script>

<style scoped>
  .category-checkbox-container {
    padding-left: 15%;
  }

</style>
