<template>
  <div class="gradient_arrow-image">
    <div class="gradient_arrow-inner_text">
      {{ separatorTitle }}
    </div>
  </div>
</template>

<script>
export default {
  name: "GradientArrow",
  props: ["separatorTitle"]
};
</script>

<style scoped>
.gradient_arrow-image {
  margin-top: 50px;
  background-image: url("../../public/img/background/gradient-separator.svg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 460px;
  position: relative;
}

.gradient_arrow-inner_text {
  display: flex;
  justify-content: center;
  font-family: Fjalla One;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
  position: relative;
  top: 60%;
}
</style>
