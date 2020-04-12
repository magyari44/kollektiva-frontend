<template>
  <div class="headline-container general-container">

    <div class="headline-description">
      Maradj kapcsolatban a számodra fontos vállalkozásokkal a krízis idején is.
      A Kollektíva a kapocs a megbízható szolgáltatók és a nyitott szívű vevők között.
    </div>

    <div class="headline-buttons">
      <div class="headline-button_buy">
        <router-link
          class="btn-orange btn-inner-stlye"
          :to="{ name: 'register' }"
        >
          Vennék
        </router-link>
      </div>

      <div class="headline-button_sell">
        <router-link
          class="btn-orange btn-inner-stlye"
          :to="{ name: 'register' }"
        >
          Eladnék
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Headline"
};
</script>

<style scoped>
.headline-container {
  background-image: url("../../../vue-realworld-example-app/public/img/background/gradient-title-bkg.svg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background: linear-gradient(145.81deg, #7F7FD5 15.44%, #00AEB3 51.31%, #91EAE4 83.6%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0px !important;
}

.headline-title {
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
  display: flex;
  justify-content: center;
}

.headline-description {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  margin-top: 40px;
}

.headline-buttons {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.headline-button_buy {
  margin-right: 60px;
}

</style>
