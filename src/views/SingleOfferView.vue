<template>
  <div>
    <CustomHeadline custom-title="fodrasz"></CustomHeadline>
    <SingleOfferPageTile></SingleOfferPageTile>
  </div>
</template>

<script>
import CustomHeadline from "@/components/CustomHeadline";
import SingleOfferPageTile from "@/components/SingleOfferPageTile";
export default {
  name: "SingleOfferView",
  components: {
    CustomHeadline,
    SingleOfferPageTile
  }
};
</script>

<style scoped></style>
