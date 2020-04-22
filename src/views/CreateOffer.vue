<template>
  <section>
    <CustomHeadline custom-title="Ajánlat készítés"></CustomHeadline>
    <OfferCreationContainer></OfferCreationContainer>
  </section>
</template>

<script>
  import CustomHeadline from "../components/CustomHeadline";
  import OfferCreationContainer from "../components/OfferCreationContainer";

  export default {
    name: "CreateOffer",
    components: {
      CustomHeadline,
      OfferCreationContainer
    }
  };
</script>

<style scoped>

</style>
