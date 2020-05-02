<template>
  <div class="col-md-10 col-xs-12" style="margin: auto">
    <h1 class="text-xs-center d-flex justify-content-center">Vállalkozásod adatai</h1>
    <p class="d-flex justify-content-start" style="margin-left: 15px;">
      <router-link :to="{ name: 'login' }">
        Van már fiókod?
      </router-link>
    </p>
    <ValidationObserver v-slot="{ handleSubmit }" slim>
      <form @submit.prevent="handleSubmit(onSubmit)">
        <fieldset class="mb-5">
          <h2 for="form-group row d-flex justify-content-center mb-2">Regisztráció típusa</h2>
          <div class="form-group row col-lg-12">
            <div class="col-lg-12">
              <validation-provider rules="required" v-slot="v">
                <select class="form-control form-input" id="registration-type" v-model="registrationType">
                  <option v-for="type in userTypes" v-bind:value="type.value">
                    {{ type.text }}
                  </option>
                </select>
              </validation-provider>
              <span>Kiválasztott: {{ registrationType }}</span>
            </div>
          </div>
        </fieldset>

        <CommonData :registration_type.sync="registrationType"
                    :user_scope_types.sync="user_scope_types"
                    :selected_scope_type.sync="selected_scope_type"
                    :real_name.sync="real_name"
                    :username.sync="username"
                    :email.sync="email"
                    :business_email.sync="business_email">
        </CommonData>

        <ContactData
          :registration_type.sync="registrationType"
          :contact_email.sync="contact_email"
          :contact_name.sync="contact_name"
          :contact_phone.sync="contact_phone">
        </ContactData>

        <BusinessData
          :registration_type.sync="registrationType"
          :bank_account_number.sync="bank_account_number"
          :tax_number.sync="tax_number"
          :business_city.sync="business_city"
          :zip_code.sync="zip_code"
          :business_address.sync="business_address"
          :business_logo.sync="business_logo"
          :business_description.sync="business_description">
        </BusinessData>

        <BillingData
          :registration_type.sync="registrationType"
          :billing_zip_code.sync="billing_zip_code"
          :billing_city.sync="billing_city"
          :billing_address.sync="billing_address">
        </BillingData>

        <SocialData
          :registration_type.sync="registrationType"
          :link_website.sync="link_website"
          :link_facebook.sync="link_facebook"
          :link_instagram.sync="link_instagram">
        </SocialData>

        <ValidationObserver tag="fieldset" class="mb-4">
          <div class="form-group row col-lg-12">
            <div class="col-lg-6">
              <label for="password">Jelszó</label>
              <validation-provider rules="required|password:@confirm" v-slot="{ errors }">
                <input
                  class="form-control form-control-lg form-input"
                  id="password"
                  type="password"
                  pattern="(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$"
                  name="jelszó"
                  v-model="password"
                  placeholder="Jelszó"
                />
                <span>{{ errors[0] }}</span>
              </validation-provider>
            </div>

            <div class="col-lg-6">
              <label for="password-re">Jelszó újra</label>
              <validation-provider name="confirm" rules="required" v-slot="{ errors }">
                <input
                  class="form-control form-control-lg form-input"
                  id="password-re"
                  type="password"
                  name="jelszó újra"
                  v-model="password_re"
                  placeholder="Jelszó újra"
                />
              </validation-provider>
            </div>
          </div>
        </ValidationObserver>

        <fieldset class="col-lg-12">
          <div class="form-group row form-check">
            <validation-provider rules="required" v-slot="{errors}" slim>
              <input type="checkbox" class="form-check-input" id="terms-and-conditions-check"
                     v-model="terms_and_conditions_checked" style="margin-left: 0;" name="szabályzat">
              <label class="form-check-label" for="terms-and-conditions-check" style="margin-left: 1.25rem;">
                Elfogadom a felhasználási feltételeket.</label>
              <span>{{ errors[0] }}</span>
            </validation-provider>
          </div>

          <button type="submit" class="btn btn-lg btn-primary pull-xs-right">
            Regisztrálok
          </button>
        </fieldset>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
  import BillingData from "./registration/BillingData";
  import SocialData from "./registration/SocialData";
  import ContactData from "./registration/ContactData";
  import BusinessData from "./registration/BusinessData";
  import CommonData from "./registration/CommonData";
  import FileUpload from "./FileUpload";
  import { REGISTER_USER } from "../store/actions.type";
  import {
    ValidationProvider,
    ValidationObserver,
    extend,
    localize,
    configure
  } from "vee-validate/dist/vee-validate.full";
  import hu from "vee-validate/dist/locale/hu.json";

  localize("hu", hu);
  extend("password", {
    params: ["target"],
    validate(value, { target }) {
      return value === target;
    },
    message: "A megadott jelszavak nem egyeznek!"
  });

  configure({
    classes: {
      valid: "is-valid",
      invalid: "is-invalid",
      dirty: ["is-dirty", "is-dirty"] // multiple classes per flag!
      // ...
    }
  });

  export default {
    name: "RegistrationContainer",
    components: {
      ContactData,
      CommonData,
      BusinessData,
      BillingData,
      SocialData,
      FileUpload,
      ValidationProvider,
      ValidationObserver,
    },
    data() {
      return {
        registrationType: "2",
        userTypes: [
          { text: "Vállalkozó vagyok", value: "2" },
          { text: "Felhasználó vagyok", value: "1" }
        ], //fiók típusa - type_id

        user_scope_types: [
          { name: "Tanuló" },
          { name: "Alkalmazott" },
          { name: "Nyugdíjas" },
          { name: "Vállalkozó" },
          { name: "Szabadúszó" }
        ], //teaor szám vállalkozónál/foglalkozási kör usernél - teaor
        selected_scope_type: "",

        username: "",  //vállalkozás neve/nickname - name
        real_name: "", //kapcsolattartó/valódi név - contact_name
        email: "", //sima email - contact_email
        phone: "", //telefonszám - phone

        bank_account_number: "", //bankszámlaszám - bank_account
        tax_number: "", //vállalkozói adószám - vat_number
        zip_code: "", //vállalkozói irányítószám - postalcode

        business_email: "", //vállalkozás email - email
        business_city: "",
        business_address: "",
        business_logo: [],
        business_description: "", //vállalkozói leírás - description
        birthYear: "", //alapítás éve/születési év

        password: "", //jelszó - password
        password_re: "", //jelszó újra - password-re

        contact_name: "",
        contact_email: "", //email cím
        contact_phone: "", //kapcsolattartó telefonszám(csak vállalkozó) - contact_phone

        billing_zip_code: "",
        billing_city: "",
        billing_address: "",

        link_website: "",
        link_facebook: "",
        link_instagram: "",

        mailing_address: "",

        terms_and_conditions_checked: false
      };
    },
    computed: {},
    methods: {
      onSubmit() {
        this.$store
          .dispatch(REGISTER_USER, {
            type_id: this.registrationType,
            email: this.email,
            password: this.password,
            name: this.username,
            phone: this.phone, //??????
            contact_name: this.contact_name,
            contact_email: this.business_email,
            contact_phone: this.contact_phone, //?????
            description: this.business_description,
            postalcode: this.zip_code,
            city: this.business_city,
            address: this.business_address,
            mailing_address: this.mailing_address,
            invoice_postalcode: this.billing_zip_code,
            invoice_city: this.billing_city,
            invoice_address: this.billing_address,
            vat_number: this.tax_number,
            bank_account: this.bank_account_number,
            logo: this.business_logo,
            teaor: this.selected_scope_type,
            link_website: this.link_website,
            link_facebook: this.link_facebook,
            link_instagram: this.link_instagram
          })
          .then(() => this.$router.push({ name: "home" }));
      },

      getFiles(files) {
        if (files) {
          this.business_logo = files;
        }
      }
    }
  };
</script>

<style scoped>

</style>
