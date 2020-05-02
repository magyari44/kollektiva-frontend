<template>
  <div class="auth-page">
    <div class="container page bkg-box">
      <div class="row">
        <div class="col-md-6 col-xs-12 d-flex justify-content-center flex-column pt-5 pb-5" style="margin: auto;">
          <h1 class="text-xs-center d-flex justify-content-center">Bejelentkezés</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'register' }">
              Még nincs fiókod?
            </router-link>
          </p>

          <form @submit.prevent="onSubmit(email, password)">
            <fieldset class="form-group">
            <input
                class="form-control form-control-lg form-input mb-4"
                id="email"
                type="email"
                required="true"
                name="email"
                v-model="email"
                placeholder="Email cím"
              />

              <input
                class="form-control form-control-lg form-input mb-4"
                type="password"
                required="true"
                v-model="password"
                placeholder="Jelszó"
              />
            </fieldset>
            <div class="col-lg-12 d-flex justify-content-center">
            <button class="btn btn-lg btn-primary pull-xs-right">
              Bejelentkezés
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { LOGIN_USER } from "@/store/actions.type";

export default {
  name: "RwvLogin",
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    onSubmit(email, password) {
      this.$store
        .dispatch(LOGIN_USER, { email, password })
        .then(() => this.$router.push({ name: "home" }));
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>
