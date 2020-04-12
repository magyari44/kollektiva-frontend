<template>
  <div>
    <CustomHeadline custom-title="A kezdeményezésről"></CustomHeadline>
    <TeamContainer></TeamContainer>
  </div>
</template>

<script>
  import CustomHeadline from "../components/CustomHeadline";
  import TeamContainer from "../components/TeamContainer";
export default {
  name: "About",
  components: {
    CustomHeadline,
    TeamContainer
  }
};
</script>

<style scoped></style>
