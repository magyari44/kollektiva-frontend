<template>
    <fieldset class="mb-5">
        <h2 for="form-group row d-flex justify-content-center mb-2">Regisztráció típusa</h2>
        <div class="form-group row col-lg-12">
            <div class="col-lg-12">
                <validation-provider rules="required" v-slot="v">
                    <select class="form-control form-input" id="registration-type" v-model="localSelectedRegistrationType"
                            @change="$emit('update:registration-type', localSelectedRegistrationType)">
                        <option v-for="type in userTypes" v-bind:value="type.value">
                            {{ type.text }}
                        </option>
                    </select>
                </validation-provider>
                <span>Kiválasztott: {{ registrationType }}</span>
            </div>
        </div>
    </fieldset>
</template>
<script>
  import {
    ValidationProvider
  } from "vee-validate/dist/vee-validate.full";
  export default {
    name: "RegistrationTypeSelector",
    components: {
      ValidationProvider,
    },
    props: {
      registrationType: String,
      userTypes: Array,
    },
    data() {
      return {
        localSelectedRegistrationType: this.registrationType
        }
      }
  };
</script>
