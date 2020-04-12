<template>
  <div>
    <CustomHeadline custom-title="GYIK"></CustomHeadline>
    <div v-for="(title, index) in faqTitles" :key=index>
      <FaqAccordion :title-number="index+1" :title-text="title" :items="myItems"></FaqAccordion>
    </div>
  </div>
</template>

<script>
  import CustomHeadline from "../components/CustomHeadline";
  import FaqAccordion from "../components/FaqAccordion";
export default {
  name: "Faq",
  components: {
    CustomHeadline,
    FaqAccordion
  },
  data() {
    return {
      faqTitles : ["Vásárló vagyok, kérdésem van!", "Vállalkozó vagyok, kérdésem van!"],
      myItems: [
        {
          title: 'Támogathatok névtelenül?s',
          value: 'Given a 24-hour day and 360 degrees of longitude around the Earth',
        },
        {
          title: 'Kötelező regisztrálnom az oldalon, ha vásárolni szeretnék?',
          value: 'Venus takes 224.7 Earth days to complete one orbit around the Sun.',
        },
        {
          title: 'Meddig érvényes a megvásárolt utalványom?',
          value: 'Binturongs smell like popcorn.',
        }
      ]
    }
  }
};
</script>

<style scoped>
</style>
