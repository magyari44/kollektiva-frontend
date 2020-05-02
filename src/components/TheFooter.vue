<template>
  <footer>
    <cookie-law theme="dark-lime">
      <div slot="message">
        Az oldal sütiket használ <router-link to="/">ASZF</router-link>
      </div>
    </cookie-law>
    <div class="general-container d-flex flex-wrap" >
      <div class="col-md-12">
        <div class="footer-img col-md-3 mb-4">
          <router-link class="logo-font" :to="{ name: 'home', params: {} }">
          <img src="img/logo/logo-feher.png" />
          </router-link>
        </div>
      </div>
      <div class="col-md-6" >
        <div class="col-lg-8" style="">
          <div>A Kollektíva  elindításával az volt a célunk, hogy a jelenlegi vészhelyzetben egyáltalán nem működő,
            stagnáló és jelentős anyagi veszteséget elszenvedő vállalkozásoknak és az őket támogatni kívánó vásárlóközönségnek
            létrehozzunk egy közös támogató felületet.</div>
        </div>
      </div>
      <div class="col-md-6 d-flex flex-wrap">
        <div class="footer-container__right_column col-lg-6 d-flex flex-column">
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
        <div class="footer-container__right_column col-lg-6">
          <div>Kapcsolat</div>
          <div>Email: info@koll.hu</div>
          <div>Telefon: +36 30 1234 12</div>
          <div>Cím: Budapest</div>
          <div>árvíztűrő tükörfúrógép</div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
  import CookieLaw from 'vue-cookie-law'

  export default {
    name: "RwvFooter",
    components: { CookieLaw }
};
</script>

<style scoped>
  .footer-img{
    height: 170px;
  }

  .footer-img img {
    max-width: 100%;
    max-height: 100%;
  }

  .footer-container__right_column {
    font-size: 18px;
    line-height: 23px;
    color: #FFFFFF;
  }

  .footer-container__right_column a {
    margin-bottom: 15px;
    color: #00aeb3;;
  }

  .footer-container__right_column a:hover {
    color: #7F7FD5;;
  }

  .footer-container__right_column > div {
    margin-bottom: 15px;
  }

</style>
