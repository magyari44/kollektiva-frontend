<template>
  <div>
    <CustomHeadline custom-title="Ajánlatok"></CustomHeadline>
    <OffersPageContainer></OffersPageContainer>
  </div>
</template>

<script>
  import CustomHeadline from "../components/CustomHeadline";
  import OffersPageContainer from "../components/OffersPageContainer";


  export default {
    name: "Offers",
    components: { CustomHeadline,
      OffersPageContainer },

  };
</script>

<style scoped>

</style>
