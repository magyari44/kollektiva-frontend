<template>
  <div>
    <CustomHeadline custom-title="Jelentkezz be a még nagyobb élményért!"></CustomHeadline>
    <LoginContainer></LoginContainer>
  </div>
</template>

<script>
  import CustomHeadline from "../components/CustomHeadline";
  import LoginContainer from "../components/LoginContainer";

export default {
  name: "RwvLogin",
  components: {
    CustomHeadline,
    LoginContainer
  }
};
</script>
