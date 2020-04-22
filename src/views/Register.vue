<template>
  <div>
    <CustomHeadline custom-title="Csatlakozz a közösséghez szolgáltatóként!"></CustomHeadline>
    <RegistrationContainer></RegistrationContainer>
  </div>
</template>

<script>
import CustomHeadline from "../components/CustomHeadline";
import RegistrationContainer from "../components/RegistrationContainer";

export default {
  name: "RegistrationView",
  components: {
    CustomHeadline,
    RegistrationContainer
  }
};
</script>
