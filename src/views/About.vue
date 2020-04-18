<template>
  <div>
    <CustomHeadline custom-title="A kezdeményezésről"></CustomHeadline>
    <AboutInitiative></AboutInitiative>
    <CustomHeadline custom-title="Csapatunk"></CustomHeadline>
    <TeamContainer></TeamContainer>
  </div>
</template>

<script>
  import CustomHeadline from "../components/CustomHeadline";
  import TeamContainer from "../components/TeamContainer";
  import AboutInitiative from "../components/AboutInitiative";
export default {
  name: "About",
  components: {
    CustomHeadline,
    TeamContainer,
    AboutInitiative
  }
};
</script>

<style scoped></style>
