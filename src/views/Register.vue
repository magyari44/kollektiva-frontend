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
  components: {CustomHeadline,
    RegistrationContainer},
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  computed: {
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(REGISTER, {
          email: this.email,
          password: this.password,
          username: this.username
        })
        .then(() => this.$router.push({ name: "home" }));
    }
  }
};
</script>
