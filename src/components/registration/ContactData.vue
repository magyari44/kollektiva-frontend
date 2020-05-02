<template>
  <!--            Kapcsolattartás-->
  <ValidationObserver tag="fieldset" class="mb-4">
    <h2 class="form-group row d-flex justify-content-center mb-2">Kapcsolattartó adatok</h2>

    <div class="form-group row col-lg-12">
      <!--            Kapcsolattartó neve-->
      <div class="col-lg-12 mb-2">
        <label for="contact-name">Név</label>
        <validation-provider rules="required" v-slot="{ errors }">
        <input
          class="form-control form-control-lg form-input"
          id="contact-name"
          type="text"
          minlength="3"
          maxlength="50"
          :name="[registration_type == '2' ? 'kapcsolattartó neve': 'teljes név']"
          v-model="localContactName"
          :placeholder="[registration_type == '2' ? 'Kapcsolattartó neve': 'Teljes név']"
          @keyup="$emit('update:contact_name', localContactName)"
        />
        <span>{{ errors[0] }}</span>
        </validation-provider>
      </div>

      <!--            Kapcsolattartó email címe-->
      <div class="mb-2" :class="[registration_type == '2' ? 'col-lg-6': 'col-lg-12']">
        <label for="contact-email">Email cím</label>
        <validation-provider rules="required|email" v-slot="{ errors }">
        <input
          class="form-control form-control-lg form-input"
          id="contact-email"
          type="text"
          name="email cím"
          minlength="3"
          maxlength="50"
          v-model="localEmail"
          placeholder="email cím"
          @keyup="$emit('update:contact_email', localEmail)"
        />
        <span>{{ errors[0] }}</span>
        </validation-provider>
      </div>

      <!--            Kapcsolattartó telefonszáma-->
      <div class="col-lg-6 mb-2" v-if="registration_type === '2'">
        <label for="contact-phone">Telefonszám</label>
        <validation-provider rules="required" v-slot="{ errors }">
        <input
          class="form-control form-control-lg form-input"
          id="contact-phone"
          type="text"
          name="telefonszám"
          minlength="3"
          maxlength="50"
          v-model="localPhone"
          placeholder="telefonszám"
          @keyup="$emit('update:contact_phone', localPhone)"
        />
          <span>{{ errors[0] }}</span>
        </validation-provider>
      </div>
    </div>
  </ValidationObserver>
</template>

<script>
  import { ValidationProvider,ValidationObserver, extend } from "vee-validate/dist/vee-validate.full";
  export default {
    name: "ContactData",
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    props: {
      registration_type: String,
      contact_name: String,
      contact_email: String,
      contact_phone: String
    },
    data() {
      return {
        localContactName: this.contact_name,
        localEmail: this.contact_email,
        localPhone: this.contact_phone,
      }
    }
  };
</script>

<style scoped>

</style>
