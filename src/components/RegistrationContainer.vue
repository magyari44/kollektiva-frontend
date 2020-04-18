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
              <label for="registration-type">Regisztráció típusa</label>
              <select class="form-control form-input" id="registration-type" v-model="registrationType">
                <option v-for="type in userTypes" v-bind:value="type.value">
                  {{ type.text }}
                </option>
              </select>
              <span>Kiválasztott: {{ registrationType }}</span>
            </fieldset>

            <CommonData :registration_type.sync="registrationType"
                        :realName.sync="real_name"
                        :username.sync="username"
                        :email.sync="email"
                        :business_email.sync="business_email"></CommonData>


            <BillingData
              :registration_type.sync="registrationType"
              :billingZipCode.sync="billingZipCode"
                         :billingCity.sync="billingCity"
                         :billingAddress.sync="billingAddress" >
            </BillingData>

            <SocialData
              :registration_type.sync="registrationType"
              :link_website.sync="link_website"
                        :link_facebook.sync="link_facebook"
                        :link_instagram.sync="link_instagram">
            </SocialData>

            <BusinessData :bank_account_number.sync="bank_account_number"
            :tax_number.sync="tax_number"
            :business_city.sync="business_city"
            :zip_code.sync="zip_code"
            :business_address.sync="business_address"
            :business_logo.sync="business_logo"
            :business_description.sync="business_description">
            </BusinessData>

            <fieldset class="form-group">
              <input
                class="form-control form-control-lg form-input"
                type="password"
                v-model="password"
                placeholder="Jelszó"
              />
            </fieldset>

            <fieldset class="form-group">
              <input
                class="form-control form-control-lg form-input"
                type="password"
                v-model="password_re"
                placeholder="Jelszó újra"
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
  import BillingData from "./registration/BillingData";
  import SocialData from "./registration/SocialData";
  import BusinessData from "./registration/BusinessData";
  import CommonData from "./registration/CommonData";

  export default {
    name: "RegistrationContainer",
    components: {
      CommonData,
      BusinessData, BillingData,
      SocialData},
    data() {
      return {
        registrationType: '0',
        userTypes: [
          { text: 'Vállalkozó vagyok', value: '0' },
          { text: 'Felhasználó vagyok', value: '1' },
        ],
        username: "",
        real_name : "",
        email: "",
        business_email: "",
        bank_account_number: "",
        tax_number: "",
        business_city: "",
        zip_code: "",
        business_address: "",
        business_logo: "",
        business_description: "",

        password: "",
        password_re: "",

        billingZipCode: "",
        billingCity: "",
        billingAddress: "",

        link_website: "",
        link_facebook: "",
        link_instagram: "",
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
