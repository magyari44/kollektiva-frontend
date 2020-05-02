<template>
  <div style="position: relative">
    <Headline></Headline>
    <HowItWorks></HowItWorks>
    <GradientArrow separator-title="Kiemelt ajánlatok"></GradientArrow>
    <OfferList></OfferList>
    <GradientArrow
      separator-title="Nem találja a kedvenc üzletét?"
    ></GradientArrow>
    <AskForInvite></AskForInvite>
  </div>
</template>

<script>
import Headline from "@/components/Headline";
import HowItWorks from "../components/static/HowItWorks";
import OfferList from "@/components/OfferList";
import GradientArrow from "@/components/GradientArrow";
import AskForInvite from "../components/static/AskForInvite";

export default {
  name: "Index",
  components: {
    Headline,
    HowItWorks,
    OfferList,
    GradientArrow,
    AskForInvite
  }
};
</script>

<style scoped></style>
