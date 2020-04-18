<template>
  <!--            SZÁMLÁZÁS-->
  <section>
    <!--            Számlázási irányítószám-->
    <fieldset class="form-group">
      <label for="billing-zip">Számlázási irányítószám</label>
      <input
        class="form-control form-control-lg form-input"
        id="billing-zip"
        type="text"
        v-model="billingZipCode"
        placeholder="Számlázási irányítószám"
        @keyup="$emit('update:billingZipCode', billingZipCode)"
      />
    </fieldset>

    <!--            Számlázási város-->
    <fieldset class="form-group">
      <label for="billing-city">Számlázási város</label>
      <input
        class="form-control form-control-lg form-input"
        id="billing-city"
        type="text"
        v-model="billingCity"
        placeholder="Számlázási város"
        @keyup="$emit('update:billingCity', billingCity)"
      />
    </fieldset>

    <!--            Számlázási cím-->
    <fieldset class="form-group">
      <label for="billing-address">Számlázási cím</label>
      <input
        class="form-control form-control-lg form-input"
        id="billing-address"
        type="text"
        v-model="billingAddress"
        placeholder="Számlázási cím"
        @keyup="$emit('update:billingAddress', billingAddress)"
      />
    </fieldset>
  </section>
</template>

<script>
  export default {
    name: "BillingData",
    props: {
      billingZipCode: String,
      billingCity: String,
      billingAddress: String
    }
  };
</script>

<style scoped>

</style>
