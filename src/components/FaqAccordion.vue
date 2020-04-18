<template>
  <div class="general-container">
    <div class="faq--title">
      {{titleNumber}}, {{titleText}}
    </div>
    <div class="faq--accordion">
      <VueFaqAccordion :items="items" border-color="transparent"/>
    </div>
  </div>

</template>

<script>
  import VueFaqAccordion from 'vue-faq-accordion'

  export default {
    name: "FaqAccordion",
    props: ['titleNumber', 'titleText', 'items'],
    components: {
      VueFaqAccordion
    },
    data () {
      return {
        sequenceNumber : this.titleNumber,
        title: this.titleText,
      }
    }
  };
</script>

<style scoped>
  .faq--title {
    display: flex;
    justify-content: center;
    font-family: Oswald;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 45px;
  }
</style>
