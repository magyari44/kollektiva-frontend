<template>
  <div class=" general-container bkg-box col-md-10 col-xs-12 d-flex justify-content-center mb-5 mt-5" style="margin: auto">
    <section class="col-lg-6 col-mb-12 d-flex justify-content-center flex-column pb-5 pt-5">
    <h1 class="text-xs-center d-flex justify-content-center">Fiókod adatai</h1>
    <p class="d-flex justify-content-start" style="margin-left: 15px;">
      <router-link :to="{ name: 'login' }">
        Van már fiókod?
      </router-link>
    </p>
    <ValidationObserver v-slot="{ handleSubmit }" slim>
      <form @submit.prevent="handleSubmit(onSubmit)">
<!--        <RegistrationTypeSelector :registration-type.sync="registrationType" :user-types.sync="userTypes"/>-->


        <ValidationObserver tag="fieldset" class="mb-4">
          <div class="form-group row col-lg-12">

            <div class="col-lg-12 mb-2">
              <label for="username">{{'Felhasználónév'}}</label>
              <validation-provider rules="required" v-slot="v">
                <input
                  class="form-control form-control-lg form-input"
                  id="username"
                  type="text"
                  minlength="3"
                  maxlength="80"
                  :name="['felhasználónév']"
                  v-model="username"
                  :placeholder="['Felhasználónév']"
                />
                <span>{{ v.errors[0] }}</span>
              </validation-provider>
            </div>

            <div class="col-lg-12 mb-2">
              <label for="email">Email</label>
              <validation-provider rules="required|email" v-slot="{ errors }">
                <input
                  class="form-control form-control-lg form-input"
                  id="email"
                  type="text"
                  minlength="3"
                  maxlength="50"
                  name="email cím"
                  v-model="email"
                  placeholder="Email cím"
                />
                <span>{{ errors[0] }}</span>
              </validation-provider>
            </div>

            <div class="col-lg-6 col-md-12">
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

            <div class="col-lg-6 col-md-12">
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

          <button type="submit" class="btn btn-lg btn-coral btn-primary pull-xs-right">
            Regisztrálok
          </button>
        </fieldset>
      </form>
    </ValidationObserver>
    </section>
  </div>
</template>

<script>
  import { REGISTER_USER } from "../store/actions.type";
  import {
    configure,
    extend,
    localize,
    ValidationObserver,
    ValidationProvider
  } from "vee-validate/dist/vee-validate.full";
  import hu from "vee-validate/dist/locale/hu.json";
  import RegistrationTypeSelector from "./RegistrationTypeSelector";

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
      RegistrationTypeSelector,
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

