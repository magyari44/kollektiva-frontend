<template>
        <div class="col-md-10 col-xs-12" style="margin: auto">
          <h1 class="text-xs-center">Vállalkozásod adatai</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'login' }">
              Van már fiókod?
            </router-link>
          </p>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <label for="username">Felhasználónév</label>
              <input
                class="form-control form-control-lg form-input"
                id="username"
                type="text"
                v-model="username"
                placeholder="Felhasználónév"
              />
            </fieldset>
            <fieldset class="form-group">
              <label for="email">Email</label>
              <input
                class="form-control form-control-lg"
                id="email"
                type="text"
                v-model="email"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                v-model="password"
                placeholder="Password"
              />
            </fieldset>
            <fieldset class="form-check">
              <input type="checkbox" class="form-check-input" id="terms-and-conditions-check">
              <label class="form-check-label" for="terms-and-conditions-check">Elfogadom a felhasználási feltételeket.</label>
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Regisztrálok
            </button>
          </form>
        </div>
</template>

<script>
  import { REGISTER } from "@/store/actions.type";

  export default {
    name: "RegistrationContainer",
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

<style scoped>

</style>
