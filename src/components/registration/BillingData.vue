<template>
  <!--            SZÁMLÁZÁS-->
  <ValidationObserver tag="fieldset" class="mb-4">
    <h2 class="form-group row d-flex justify-content-center mb-2">Számlázási adatok</h2>
    <div class="form-group row col-lg-12">
      <!--            Számlázási irányítószám-->
      <div class="col-lg-2 col-md-3">
        <label for="billing-zip">Irányítószám</label>
        <validation-provider rules="required" v-slot="{ errors }">
        <input
          class="form-control form-control-lg form-input"
          id="billing-zip"
          type="text"
          name="irányítószám"
          v-mask="['####']"
          v-model="localBillingZipCode"
          placeholder="Irányítószám"
          @keyup="$emit('update:billing_zip_code', localBillingZipCode)"
        />
        <span>{{ errors[0] }}</span>
        </validation-provider>
      </div>

      <!--            Számlázási város-->
      <div class="col-lg-3 col-md-9">
        <label for="billing-city">Város</label>
        <validation-provider rules="required" v-slot="{ errors }">
        <input
          class="form-control form-control-lg form-input"
          id="billing-city"
          type="text"
          maxlength="50"
          name="város"
          v-model="localBillingCity"
          placeholder="Város"
          @keyup="$emit('update:billing_city', localBillingCity)"
        />
          <span>{{ errors[0] }}</span>
        </validation-provider>
      </div>

      <!--            Számlázási cím-->
      <div class="col-lg-7 col-md-12">
        <label for="billing-address">Cím</label>
        <validation-provider rules="required" v-slot="{ errors }">
        <input
          class="form-control form-control-lg form-input"
          id="billing-address"
          type="text"
          maxlength="50"
          name="cím"
          v-model="localBillingAddress"
          placeholder="Cím"
          @keyup="$emit('update:billing_address', localBillingAddress)"
        />
        <span>{{ errors[0] }}</span>
        </validation-provider>
      </div>
    </div>


  </ValidationObserver>
</template>

<script>
  import { ValidationProvider,ValidationObserver, extend } from "vee-validate/dist/vee-validate.full";
  import {mask} from 'vue-the-mask'
  export default {
    name: "BillingData",
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    props: {
      billing_zip_code: String,
      billing_city: String,
      billing_address: String
    },
    directives: {mask},
    data() {
      return {
        localBillingZipCode: this.billing_zip_code,
        localBillingCity: this.billing_city,
        localBillingAddress: this.billing_address,
      }
    }
  };
</script>

<style scoped>

</style>
