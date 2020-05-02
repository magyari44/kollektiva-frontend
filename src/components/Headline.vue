<template>
  <div class="headline-container general-container">

    <detail class="headline-description">Maradj kapcsolatban a számodra fontos vállalkozásokkal a krízis idején is.
      A Kollektíva a kapocs a megbízható szolgáltatók és a nyitott szívű vevők között.
    </detail>

    <div class="headline-buttons d-flex flex-sm-wrap flex-sm-row flex-column">
      <div class="headline-button_buy d-flex justify-content-center">
        <router-link
          class="btn-orange btn-inner-stlye"
          :to="{ name: 'register' }"
        >
          Vennék
        </router-link>
      </div>

      <div class="headline-button_sell d-flex justify-content-center">
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
  background-size: 100% auto;
  background: linear-gradient(145.81deg, #7F7FD5 15.44%, #00AEB3 51.31%, #91EAE4 83.6%) no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0 !important;
  padding: 20px 0;
}

.headline-title {
  font-family: Oswald;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
  display: flex;
  justify-content: center;
}

.headline-description {
  color: #ffffff;
  text-align: center;
  padding: 0 10px;
}

.headline-buttons {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.headline-button_buy {
  margin-right: 60px;
}

@media screen and (max-width: 576px) {
  .headline-button_buy {
    margin-right: 0;
    margin-bottom: 0.6rem;
  }

}

</style>
