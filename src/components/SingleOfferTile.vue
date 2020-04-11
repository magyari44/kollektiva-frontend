<template>
  <div class="single_offer-container">
    <div class="single_offer-image">
      <img :src="offer.picture" />
    </div>

    <div class="single_offer-description_wrapper">
      <div class="description_wrapper-title">
        {{ offer.name }}
      </div>
      <div class="description_wrapper-category">
        Kategória1, kategória2
      </div>
      <div class="description_wrapper-location">
        5600 Békéscsaba, Dobozi út 58.
      </div>
      <div class="description_wrapper-description">
        {{ offer.description }}
      </div>
      <div class="description_wrapper-order_button">
        <router-link
          class="btn-orange btn-inner-stlye"
          :to="{ name: 'offer', params: { offerSlug: offer.slug } }"
        >
          Tovább
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Offer",
  props: ["offer"],
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.single_offer-container {
  display: flex;
  max-width: 610px;
  background: #f8f8f8;
  box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin: 0 20px 20px;
}

.single_offer-image {
  max-width: 250px;
  margin: auto;
}

.single_offer-image img {
  max-width: 250px;
  border-radius: 15px;
}

.single_offer-description_wrapper {
  display: flex;
  flex-flow: column;
  padding: 20px;
}

.description_wrapper-title {
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #3d3d3d;
  margin-bottom: 7px;
}

.description_wrapper-location {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #828282;
  margin-bottom: 16px;
}

.description_wrapper-description {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #3d3d3d;
  margin-bottom: 20px;
}

.description_wrapper-category {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #00aeb3;
  margin-bottom: 16px;
}

.description_wrapper-order_button {
  display: flex;
  justify-content: flex-end;
}

.description_wrapper-order_button button {
  border: 2px solid #f0ac45;
  box-sizing: border-box;
  border-radius: 10px;
  color: #f0ac45;
}
</style>
