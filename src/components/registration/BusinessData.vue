<template>
  <div v-if="registration_tpye === '0'">

    <!--            Bankszámlaszám-->
    <fieldset class="form-group">
      <label for="bank-account-number">Bankszámlaszám</label>
      <input
        class="form-control form-control-lg form-input"
        id="bank-account-number"
        type="text"
        v-model="bank_account_number"
        placeholder="Bankszámlaszám"
        @keyup="$emit('update:bank_account_number', bank_account_number)"

      />
    </fieldset>

    <!--            Adószám-->
    <fieldset class="form-group">
      <label for="tax-number">Adószám</label>
      <input
        class="form-control form-control-lg form-input"
        id="tax-number"
        type="text"
        v-model="tax_number"
        placeholder="Adószám"
        @keyup="$emit('update:tax_number', tax_number)"

      />
    </fieldset>

    <!--            Irányítószám-->
    <fieldset class="form-group">
      <label for="zip-code">Irányítószám</label>
      <input
        class="form-control form-control-lg form-input"
        id="zip-code"
        type="text"
        v-model="zip_code"
        placeholder="Irányítószám"
        @keyup="$emit('update:zip_code', zip_code)"

      />
    </fieldset>

    <!--            Város-->
    <fieldset class="form-group">
      <label for="business-city">Vállalkozás városa</label>
      <input
        class="form-control form-control-lg form-input"
        id="business-city"
        type="text"
        v-model="business_city"
        placeholder="Vállalkozás városa"
        @keyup="$emit('update:business_city', business_city)"

      />
    </fieldset>


    <!--            Cím-->
    <fieldset class="form-group">
      <label for="business-address">Vállalkozás címe</label>
      <input
        class="form-control form-control-lg form-input"
        id="business-address"
        type="text"
        v-model="business_address"
        placeholder="Vállalkozás címe"
        @keyup="$emit('update:business_address', business_address)"

      />
    </fieldset>

    <!--            Logó-->
    <fieldset class="form-group">
      <label for="business-logo">Vállalkozás logója</label>
      <input
        class="form-control form-control-lg form-input"
        id="business-logo"
        type="text"
        v-model="business_logo"
        placeholder="Vállalkozás logója"
        @keyup="$emit('update:business_logo', business_logo)"

      />
    </fieldset>


    <!--            Bemutatkozás-->
    <fieldset class="form-group">
      <label for="business-description">Vállalkozás bemutatása</label>
      <textarea
        class="form-control form-control-lg form-input"
        id="business-description"
        type="text"
        v-model="business_description"
        placeholder="Vállalkozás bemutatása"
        @keyup="$emit('update:business_description', business_description)"

      />
    </fieldset>

  </div>


</template>

<script>
  export default {
    name: "BusinessData",
    props: {
      registration_tpye: String,
      bank_account_number: String,
      tax_number: String,
      zip_code: String,
      business_city: String,
      business_address: String,
      business_logo: String,
      business_description: String,

    }
  };
</script>

<style scoped>

</style>
