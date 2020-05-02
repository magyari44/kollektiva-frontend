<template>
  <!--            SOCIAL-->
  <ValidationObserver tag="fieldset" v-if="registration_type === '2'" class="mb-4">

    <h2 class="form-group row d-flex justify-content-center mb-2">Közösségi platformok</h2>

    <div class="form-group row col-lg-12">
      <!--            Weboldal-->
      <div class="col-lg-4">
        <label for="web-address">Weboldal URL</label>
        <input
          class="form-control form-control-lg form-input"
          id="web-address"
          type="text"
          maxlength="255"
          name="weboldal címe"
          v-model="link_website"
          placeholder="Weboldal címe"
          @keyup="$emit('update:link_website', link_website)"
        />
      </div>
      <!--            Facebook-->
      <div class="col-lg-4">
        <label for="social-facebook">Facebook</label>
        <input
          class="form-control form-control-lg form-input"
          id="social-facebook"
          type="text"
          maxlength="255"
          v-model="link_facebook"
          placeholder="Facebook"
          @keyup="$emit('update:link_facebook', link_facebook)"
        />
      </div>
      <!--            Instagram-->
      <div class="col-lg-4">
        <label for="social-instagram">Instagram</label>
        <input
          class="form-control form-control-lg form-input"
          id="social-instagram"
          type="text"
          maxlength="255"
          v-model="link_instagram"
          placeholder="Instagram"
          @keyup="$emit('update:link_instagram', link_instagram)"
        />
      </div>
    </div>
  </ValidationObserver>
</template>

<script>
  import { ValidationProvider,ValidationObserver, extend } from "vee-validate/dist/vee-validate.full";
  export default {
    name: "SocialData",
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    props: {
      registration_type: String,
      link_website: String,
      link_facebook: String,
      link_instagram: String
    }
  };
</script>

<style scoped>

</style>
