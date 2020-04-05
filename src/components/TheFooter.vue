<template>
  <footer>
    <div class="container general-container">
      <router-link class="logo-font" :to="{ name: 'home', params: {} }">
        KESZ
      </router-link>
      <span class="attribution">
        Hack the crisis Hungary - TIXA
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "RwvFooter"
};
</script>

<style scoped>
footer {
  height: 100px;
  background: #262626;
}
</style>
