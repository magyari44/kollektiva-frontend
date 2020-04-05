<template>
  <nav class="navbar navbar-light navbar-shadow navbar-fixed-top">
    <div class="container">
      <ul class="nav navbar-nav pull-xs-left">
        <div class="navbar-brand"></div>
        <li class="nav-item brand">
          <router-link class="" :to="{ name: 'home' }">
            KESZ/NYUJTS KEZET
          </router-link>
        </li>
      </ul>

      <ul class="nav navbar-nav pull-xs-right">
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
            FAQ
          </router-link>
        </li>
        <li class="nav-item connect">
          <router-link
            class="connect-link"
            active-class="active"
            exact
            :to="{ name: 'register' }"
          >
            Csatlakozom
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RwvHeader"
};
</script>

<style scoped>
.navbar-shadow {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.navbar {
  background: linear-gradient(
    360deg,
    #fcfcfc 0%,
    rgba(252, 252, 252, 0) 831.9%
  );
  box-shadow: 10px 0px 20px rgba(0, 0, 0, 0.25);
  min-height: 75px;
}

.navbar .navbar-nav {
  flex-direction: row;
  justify-content: space-between;
}

.navbar .nav-item {
  font-family: Fjalla One;
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

.navbar .nav-item.brand a {
  color: #00aeb3;
}

.navbar .nav-item.connect .connect-link {
  color: #00aeb3;
  display: table-cell;
  vertical-align: middle;
}
</style>
