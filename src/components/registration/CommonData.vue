<template>
  <ValidationObserver tag="fieldset" class="mb-4">

    <div class="form-group row col-lg-12">

      <div class="col-lg-12 mb-2">
        <label for="username">{{registration_type == '2' ? 'Vállalkozás neve': 'Felhasználónév'}}</label>
        <validation-provider rules="required" v-slot="v">
        <input
          class="form-control form-control-lg form-input"
          id="username"
          type="text"
          minlength="3"
          maxlength="80"
          :name="[registration_type == '2' ? 'vállalkozás neve': 'felhasználónév']"
          v-model="localUsername"
          :placeholder="[registration_type == '2' ? 'Vállalkozás neve': 'Felhasználónév']"
          @keyup="$emit('update:username', localUsername)"
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
            v-model="localEmail"
            placeholder="Email cím"
            @keyup="$emit('update:email', localEmail)"
          />
          <span>{{ errors[0] }}</span>
        </validation-provider>
      </div>

      <!--            Vállalkozás email címe-->
      <div v-if="registration_type == 2" class="col-lg-12 mb-2">
        <label for="business-email">Vállalkozás email címe</label>
        <validation-provider rules="required|email" v-slot="v">
        <input
          class="form-control form-control-lg form-input"
          id="business-email"
          type="text"
          minlength="3"
          maxlength="50"
          name="vállalkozás email címe"
          v-model="localBusinessEmail"
          placeholder="Vállalkozás email címe"
          @keyup="$emit('update:business_email', localBusinessEmail)"

        />
          <span>{{ v.errors[0] }}</span>
        </validation-provider>
      </div>

      <!--            Tevékenyési kör vállalkozó-->
      <div v-if="registration_type === '2'" class="col-lg-12 mb-2">
        <label for="scope-of-activity">TEAOR szám</label>
        <validation-provider rules="required" v-slot="v">
        <input
          class="form-control form-control-lg form-input"
          id="scope-of-activity"
          type="text"
          maxlength="50"
          name="teoar szám"
          v-model="localSelectedScopeType"
          placeholder="TEAOR szám"
          @keyup="$emit('update:selected_scope_type', localSelectedScopeType)"

        />
          <span>{{ v.errors[0] }}</span>
        </validation-provider>
      </div>

      <!--      Tevékenyésgi kör felhasználó-->
      <div v-if="registration_type === '1'" class="col-lg-12 mb-2">
        <label>Foglalkozási kör</label>
        <validation-provider rules="required" v-slot="v">
        <select class="form-control form-input" id="registration-type" name="foglalkozási kör" v-model="localSelectedScopeType"
                @change="$emit('update:selected_scope_type', localSelectedScopeType)">
          <option v-for="type in user_scope_types" v-bind:value="type.name" >
            {{ type.name }}
          </option>
        </select>
          <span>{{ v.errors[0] }}</span>
        </validation-provider>
        <span>Kiválasztott: {{ localSelectedScopeType }}</span>
      </div>
    </div>
  </ValidationObserver>

</template>

<script>
  import { ValidationProvider,ValidationObserver, extend } from "vee-validate/dist/vee-validate.full";
  import { localize } from 'vee-validate';
  import hu from 'vee-validate/dist/locale/hu.json';
  export default {
    name: "CommonData",
    components:{
      ValidationProvider,
      ValidationObserver
    },
    props: {
      registration_type: String,
      user_scope_types: [
        { name: "Tanuló" },
        { name: "Alkalmazott" },
        { name: "Nyugdíjas" },
        { name: "Vállalkozó" },
        { name: "Szabadúszó" }
      ], //teaor szám vállalkozónál/foglalkozási kör usernél - teaor
      selected_scope_type: "",
      real_name: String,
      username: String,
      email: String,
      business_email: String
    },
    data() {
      return {
        localSelectedScopeType: this.selected_scope_type,
        // localRealName: this.real_name,
        localUsername: this.username,
        localEmail: this.email,
        localBusinessEmail: this.business_email,
      }
      }
  };
</script>

<style scoped>

</style>
