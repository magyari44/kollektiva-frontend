<template>
  <div class="ask_for_invite-container general-container">
    <div class="ask_for_invite-wrapper">
      <div class="ask_for_invite-wrapper-image image"></div>
      <div class="ask_for_invite-wrapper-description description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam,
        arcu vel sodales varius, lacus est ultricies nunc, ac semper lacus
      </div>
      <div class="ask_for_invite-wrapper-button-container">
        <router-link
          class="btn-orange btn-inner-stlye"
          :to="{ name: 'register' }"
        >
          Meghívom
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AskForInvite"
};
</script>

<style scoped>
.ask_for_invite-container {
  background: #ffffff;
  display: flex;
  justify-content: center;
}

.ask_for_invite-container > div {
  max-width: 305px;
}

.ask_for_invite-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.ask_for_invite-wrapper-description.description {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #3d3d3d;
  margin-top: 15px;
}

.ask_for_invite-wrapper-button-container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.ask_for_invite-wrapper-image {
  background-image: url("../../public/img/icons/5ikonmeghivas.png");
}

.ask_for_invite-wrapper-image.image {
  background-repeat: no-repeat;
  height: 145px;
  width: 145px;
  margin: auto;
}
</style>
