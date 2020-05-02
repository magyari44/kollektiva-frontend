<template>
  <ValidationObserver tag="fieldset" v-if="registration_type == '2'" class="mb-4">

    <h2 class="form-group row d-flex justify-content-center mb-2">Vállalkozói adatok</h2>
    <div class="form-group row col-lg-12">
    <!--            Bankszámlaszám-->
    <div class="col-lg-9 mb-2">
      <label for="bank-account-number">Bankszámlaszám</label>
      <validation-provider rules="required" v-slot="{ errors }">
      <input
        class="form-control form-control-lg form-input"
        id="bank-account-number"
        type="tel"
        minlength="16"
        maxlength="26"
        name="bankszámlaszám"
        v-mask="['########-########', '########-########-########']"
        v-model="bankAccountNumber"
        placeholder="Bankszámlaszám"
        @keyup="$emit('update:bank_account_number', bankAccountNumber)"
      />
      <span>{{ errors[0] }}</span>
      </validation-provider>
    </div>

    <!--            Adószám-->
    <div class="col-lg-3 mb-2">
      <label for="tax-number">Adószám</label>
      <validation-provider rules="required" v-slot="{ errors }">
      <input
        class="form-control form-control-lg form-input"
        id="tax-number"
        type="tel"
        name="adószám"
        minlength="13"
        maxlength="13"
        v-mask="['########-#-##']"
        v-model="taxNumber"
        placeholder="Adószám"
        @keyup="$emit('update:tax_number', taxNumber)"
      />
        <span>{{ errors[0] }}</span>
      </validation-provider>
    </div>

    <!--            Irányítószám-->
    <div class="col-lg-2 mb-2">
      <label for="zip-code">Irányítószám</label>
      <validation-provider rules="required" v-slot="{ errors }">
      <input
        class="form-control form-control-lg form-input"
        id="zip-code"
        type="text"
        name="irányítószám"
        minlength="4"
        maxlength="4"
        v-mask="['####']"
        v-model="zipCode"
        placeholder="Irányítószám"
        @keyup="$emit('update:zip_code', zipCode)"
      />
      <span>{{ errors[0] }}</span>
      </validation-provider>
    </div>

    <!--            Város-->
    <div class="col-lg-3 mb-2">
      <label for="business-city">Város</label>
      <validation-provider rules="required" v-slot="{ errors }">
      <input
        class="form-control form-control-lg form-input"
        id="business-city"
        type="text"
        maxlength="50"
        name="város"
        v-model="businessCity"
        placeholder="város"
        @keyup="$emit('update:business_city', businessCity)"
      />
        <span>{{ errors[0] }}</span>
      </validation-provider>
    </div>


    <!--            Cím-->
    <div class="col-lg-7 mb-2">
      <label for="business-address">Cím</label>
      <validation-provider rules="required" v-slot="{ errors }">
      <input
        class="form-control form-control-lg form-input"
        id="business-address"
        type="text"
        maxlength="50"
        name="cím"
        v-model="businessAddress"
        placeholder="cím"
        @keyup="$emit('update:business_address', businessAddress)"
      />
      <span>{{ errors[0] }}</span>
      </validation-provider>
    </div>

    <!--            Logó-->
    <div v-if="registration_type === '2'" class="col-lg-12 mb-2">
      <FileUpload label="Logó" maxPictureCount="1"
                  v-on:change="getFiles"></FileUpload>
    </div>

    <!--            Bemutatkozás-->
    <div class="col-lg-12 mb-2">
      <label for="business-description">Vállalkozás bemutatása</label>
      <validation-provider rules="required" v-slot="{ errors }">
      <textarea
        class="form-control form-control-lg form-input"
        id="business-description"
        type="text"
        maxlength="255"
        name="vállalkozás bemutatása"
        v-model="businessDescription"
        placeholder="Vállalkozás bemutatása"
        @keyup="$emit('update:business_description', businessDescription)"
      />
        <span>{{ errors[0] }}</span>
      </validation-provider>
    </div>
    </div>

  </ValidationObserver>


</template>

<script>
  import FileUpload from "../FileUpload";
  import { ValidationProvider,ValidationObserver, extend } from "vee-validate/dist/vee-validate.full";
  import {mask} from 'vue-the-mask'


  export default {
    name: "BusinessData",
    components: {
      FileUpload,
      ValidationProvider,
      ValidationObserver
    },
    props: {
      registration_type: String,
      bank_account_number: String,
      tax_number: String,
      zip_code: String,
      business_city: String,
      business_address: String,
      business_logo: Array,
      business_description: String,
    },
    directives: {mask},
    data() {
      return {
        bankAccountNumber: this.bank_account_number,
        taxNumber: this.tax_number,
        zipCode: this.zip_code,
        businessCity: this.business_city,
        businessAddress: this.business_address,
        businessLogo: this.business_logo,
        businessDescription: this.business_description,

      }
    },
    methods: {
      getFiles(files) {
        if (files) {
          this.businessLogo = files;
        }
      },
    }
  };
</script>

<style scoped>

</style>
