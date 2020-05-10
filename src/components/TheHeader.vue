<template>
  <nav class="navbar navbar-light navbar-shadow navbar-fixed-top">
    <div class="navbar-container d-flex flex-fill">
      <ul class="nav navbar-nav justify-content-start flex-grow-1 flex-width-3">
        <li class="nav-item brand" >
          <router-link class="" :to="{ name: 'home' }">
            <img src="img/logo/logo-2.png" style="max-height: 40px"/>
            Kollektiva
          </router-link>
        </li>
      </ul>

      <ul class="nav navbar-nav d-flex flex-sm-row flex-column d-flex justify-content-center
      flex-grow-1 flex-width-3 align-items-center">
        <li class="nav-item">
          <router-link
            class=""
            active-class="active"
            exact
            :to="{ name: 'offers' }"
          >
            Ajánlatok
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class=""
            active-class="active"
            exact
            :to="{ name: 'about' }"
          >
            A kollektíváról
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class=""
            active-class="active"
            exact
            :to="{ name: 'registration' }"
          >
            Vállalkozóknak
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class=""
            active-class="active"
            exact
            :to="{ name: 'faq' }"
          >
            GYIK
          </router-link>
        </li>
      </ul>
      <ul class="nav navbar-nav d-flex flex-sm-row flex-column d-flex justify-content-end
      flex-grow-1 flex-width-3 align-items-center" >
        <li v-if="!isAuthenticated" class="nav-item connect login">
          <router-link
            class="login-link"
            active-class="active"
            exact
            :to="{ name: 'login' }"
          >
            Bejelentkezés
          </router-link>
        </li>
        <li v-if="!isAuthenticated" class="nav-item connect register">
          <router-link
            class="register-link"
            active-class="active"
            exact
            :to="{ name: 'register' }"
          >
            Regisztráció
          </router-link>
        </li>
        <li v-if="isAuthenticated" class="nav-item logout">
          <a
            @click="logout"
            class="logout-link"
          >
            Kijelentkezés
          </a>
        </li>
        <li v-if="isAuthenticated" class="nav-item">
          Szia {{username}}
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGOUT_USER } from "../store/actions.type";

export default {
  name: "RwvHeader",
  computed: {
    ...mapGetters(["isAuthenticated", "user"]),
    username: function() {
        return this.user.name;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT_USER).then(() => {
        this.$router.push({ name: "login" });
      });
    }
  }
};
</script>

<style scoped>
.navbar-shadow {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.navbar {
  background: linear-gradient(
    360deg,
    #fcfcfc 0%,
    rgba(252, 252, 252, 0) 831.9%
  );
  box-shadow: 10px 0 20px rgba(0, 0, 0, 0.25);
  min-height: 75px;
  position: relative;
  padding: .5rem 1rem;
}

.navbar-container {
  max-width: 95%;
  margin: 0 auto;
}

.flex-width-3 {
  width: 33%;
}

.navbar .navbar-nav {
  justify-content: space-between;
}

.navbar .nav-item {
  font-family: "Oswald", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  margin: 0 10px;
}

.navbar .nav-item a {
  color: #3d3d3d;
}

.navbar .nav-item.connect {
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0 30px;
}

.navbar .nav-item.login {
  border: 2px solid black;
}

.navbar .nav-item.register {
  border: 2px solid #00aeb3;
  background: #00AEB3;
}

.navbar .nav-item.logout {
  border: 2px solid #d9534f;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0 30px;
}

.navbar .nav-item.brand a {
  color: #00aeb3;
}

.navbar .nav-item.connect .login-link,
.navbar .nav-item.connect .register-link {
  display: table-cell;
  vertical-align: middle;
}

.navbar .nav-item.connect .login-link {
  color: #000000;
}

.navbar .nav-item.connect .register-link {
  color: #ffffff;
}

.navbar .nav-item.connect .logout-link {
  color: #d9534f;
  display: table-cell;
  vertical-align: middle;
}

@media screen and (max-width: 576px) {
  .navbar .nav-item {
    margin-bottom: 0.3rem;
  }
}


</style>
