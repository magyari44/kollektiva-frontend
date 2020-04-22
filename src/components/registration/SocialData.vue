<template>
  <!--            SOCIAL-->
  <section v-if="registration_type === '1'">
    <!--            Weboldal-->
    <fieldset class="form-group">
      <label for="web-address">Weboldal URL</label>
      <input
        class="form-control form-control-lg form-input"
        id="web-address"
        type="text"
        v-model="link_website"
        placeholder="Weboldal URL"
        @keyup="$emit('update:link_website', link_website)"
      />
    </fieldset>
    <!--            Facebook-->
    <fieldset class="form-group">
      <label for="social-facebook">Facebook</label>
      <input
        class="form-control form-control-lg form-input"
        id="social-facebook"
        type="text"
        v-model="link_facebook"
        placeholder="Facebook"
        @keyup="$emit('update:link_facebook', link_facebook)"
      />
    </fieldset>
    <!--            Instagram-->
    <fieldset class="form-group">
      <label for="social-instagram">Instagram</label>
      <input
        class="form-control form-control-lg form-input"
        id="social-instagram"
        type="text"
        v-model="link_instagram"
        placeholder="Instagram"
        @keyup="$emit('update:link_instagram', link_instagram)"
      />
    </fieldset>
  </section>
</template>

<script>
  export default {
    name: "SocialData",
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
