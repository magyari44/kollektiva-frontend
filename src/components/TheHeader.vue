<template>
  <nav class="navbar navbar-light navbar-shadow navbar-fixed-top">
    <div class="container">
      <ul class="nav navbar-nav pull-xs-left">
        <div class="navbar-brand"></div>
        <li class="nav-item brand">
          <router-link class="" :to="{ name: 'home' }">
            <img src="img/logo/logo-2.png" style="max-height: 40px"/>
            Kollektiva
          </router-link>
        </li>
      </ul>

      <ul class="nav navbar-nav pull-xs-right d-flex flex-sm-row flex-column">
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
            A kezdeményezésről
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class=""
            active-class="active"
            exact
            :to="{ name: 'invite' }"
          >
            Meghívó
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
        <li v-if="!isAuthenticated" class="nav-item connect">
          <router-link
            class="connect-link"
            active-class="active"
            exact
            :to="{ name: 'register' }"
          >
            Csatlakozom
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
  border: 2px solid #00aeb3;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0 30px;
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

.navbar .nav-item.connect .connect-link {
  color: #00aeb3;
  display: table-cell;
  vertical-align: middle;
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
