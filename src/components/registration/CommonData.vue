<template>
  <section>

    <fieldset class="form-group">
      <label for="real-name">Teljes név</label>
      <input
        class="form-control form-control-lg form-input"
        id="real-name"
        type="text"
        v-model="real_name"
        placeholder="Teljes név"
        @keyup="$emit('update:real_name', real_name)"

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
        @keyup="$emit('update:username', username)"

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
        @keyup="$emit('update:email', email)"
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
        @keyup="$emit('update:business_email', business_email)"

      />
    </fieldset>
  </section>

</template>

<script>
  export default {
    name: "CommonData",
    props: {
      real_name: String,
      username: String,
      email: String,
      business_email: String

    }
  };
</script>

<style scoped>

</style>
