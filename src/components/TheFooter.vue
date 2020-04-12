<template>
  <footer>
    <div class="general-container footer-container">
      <div class="footer-container__left">
        <div>
          <router-link class="logo-font" :to="{ name: 'home', params: {} }">
            KESZ
          </router-link>
        </div>
        <div class="" style="max-width: 70%">
          <p>A Kollektíva  elindításával az volt a célunk, hogy a jelenlegi vészhelyzetben egyáltalán nem működő,
            stagnáló és jelentős anyagi veszteséget elszenvedő vállalkozásoknak és az őket támogatni kívánó vásárlóközönségnek
            létrehozzunk egy közös támogató felületet.</p>
        </div>
      </div>
      <div class="footer-container__right">
        <div class="footer-container__right_column">
          <router-link
            class=""
            active-class="active"
            exact
            :to="{ name: 'offers' }"
          >
            Ajánlatok
          </router-link>
          <router-link
            class=""
            active-class="active"
            exact
            :to="{ name: 'about' }"
          >
            A kezdeményezésről
          </router-link>
            <router-link
              class=""
              active-class="active"
              exact
              :to="{ name: 'invite' }"
            >
              Meghívó
            </router-link>
            <router-link
              class=""
              active-class="active"
              exact
              :to="{ name: 'faq' }"
            >
              FAQ
            </router-link>
        </div>
        <div class="footer-container__right_column">
          <div>Kapcsolat</div>
          <div>Email: info@koll.hu</div>
          <div>Telefon: +36 30 1234 12</div>
          <div>Cím: Budapest</div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: "RwvFooter"
};
</script>

<style scoped>
  footer {
    background: #383838;
  }
  footer div {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;

    color: #FFFFFF;
  }

  .footer-container {
    display: flex;
    justify-content: space-between;
  }

  .footer-container__left {
    max-width: 50%;
  }

  .footer-container__right {
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: space-between;
  }

  .footer-container__right_column {
    display: flex;
    flex-direction: column;
  }

</style>
