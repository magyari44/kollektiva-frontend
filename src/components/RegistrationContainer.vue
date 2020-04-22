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
                        :real_name.sync="real_name"
                        :username.sync="username"
                        :email.sync="email"
                        :business_email.sync="business_email">
              </CommonData>


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

            <ValidationProvider rule="required" v-slot="{ errors }">
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg form-input"
                  type="password"
                  v-model="password"
                  placeholder="Jelszó"
                />
                <span>{{ errors[0] }}</span>
              </fieldset>
            </ValidationProvider>

            <ValidationProvider rule="required" v-slot="{ errors }">
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg form-input"
                  type="password"
                  v-model="password_re"
                  placeholder="Jelszó újra"
                />
              </fieldset>
            </ValidationProvider>


              <fieldset class="form-check">
              <input type="checkbox" class="form-check-input" id="terms-and-conditions-check">
              <label class="form-check-label" for="terms-and-conditions-check">Elfogadom a felhasználási feltételeket.</label>
            </fieldset>

            <button type="submit" class="btn btn-lg btn-primary pull-xs-right">
              Regisztrálok
            </button>
          </form>
        </div>
</template>

<script>
  import BillingData from "./registration/BillingData";
  import SocialData from "./registration/SocialData";
  import BusinessData from "./registration/BusinessData";
  import CommonData from "./registration/CommonData";
  import { REGISTER_USER } from "../store/actions.type";
  import { ValidationProvider, extend } from 'vee-validate';


  export default {
    name: "RegistrationContainer",
    components: {
      CommonData,
      BusinessData,
      BillingData,
      SocialData,
      ValidationProvider
    },
    data() {
      return {
        registrationType: '2',
        userTypes: [
          { text: 'Vállalkozó vagyok', value: '2' },
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

        phone: "",
        contact_phone: "",
        mailing_address: "",
        teaor: "6201",
      };
    },
    computed: {
    },
    methods: {
      onSubmit() {
        this.$store
          .dispatch(REGISTER_USER, {
            type_id: this.registrationType,
            email: this.email,
            password: this.password,
            name: this.username,
            phone: this.phone, //??????
            contact_name: this.real_name,
            contact_email: this.business_email,
            contact_phone: this.contact_phone, //?????
            description: this.business_description,
            postalcode: this.zip_code,
            city: this.business_city,
            address: this.business_address,
            mailing_address: this.mailing_address,
            invoice_postalcode: this.billingZipCode,
            invoice_city: this.billingCity,
            invoice_address: this.billingAddress,
            vat_number: this.tax_number,
            bank_account: this.bank_account_number,
            logo: this.business_logo,
            teaor: this.teaor,
            link_website: this.link_website,
            link_facebook: this.link_facebook,
            link_instagram: this.link_instagram
          })
          .then(() => this.$router.push({ name: "home" }));
      }
    }
  };
</script>

<style scoped>

</style>
