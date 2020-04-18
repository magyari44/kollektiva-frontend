<template>
  <section>

    <fieldset class="form-group">
      <label for="real-name">Teljes név</label>
      <input
        class="form-control form-control-lg form-input"
        id="real-name"
        type="text"
        v-model="realName"
        placeholder="Teljes név"
      />
    </fieldset>

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
        class="form-control form-control-lg form-input"
        id="email"
        type="text"
        v-model="email"
        placeholder="Email cím"
      />
    </fieldset>

    <!--            Tevékenyési kör-->
    <fieldset class="form-group">
      <label for="business-email">Vállalkozás email címe</label>
      <input
        class="form-control form-control-lg form-input"
        id="business-email"
        type="text"
        v-model="business_email"
        placeholder="Vállalkozás email címe"
      />
    </fieldset>
  </section>

</template>

<script>
  export default {
    name: "CommonData",
    props: {
      realName: String,
      username: String,
      email: String,
      business_email: String

    }
  };
</script>

<style scoped>

</style>
