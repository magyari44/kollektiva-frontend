<template>
  <div class="how_it_works-container general-container">
    <div class="how_it_works-instruction_1">
      <div class="how_it_works-instruction_1_image image"></div>
      <div class="how_it_works-instruction_1_description description">
        Fizess most a szolgáltatásért és segítsd át a nehézségen a helyi vállalkozókat.
      </div>
    </div>
    <div class="how_it_works-instruction_2">
      <div class="how_it_works-instruction_2_image image"></div>
      <div class="how_it_works-instruction_2_description description">
        Vedd igénybe a szolgáltatást a krízishelyzet után.
      </div>
    </div>
    <div class="how_it_works-instruction_3">
      <div class="how_it_works-instruction_3_image image"></div>
      <div class="how_it_works-instruction_3_description description">
        Mutass példát másoknak és népszeruüsítsd a Kollektívát.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowItWorks"
};
</script>

<style scoped>
.how_it_works-container {
  background: #ffffff;
  display: flex;
  justify-content: space-between;
}

.how_it_works-container > div {
  max-width: 305px;
}

.how_it_works-instruction_1_title.title,
.how_it_works-instruction_2_title.title,
.how_it_works-instruction_3_title.title {
  font-family: Oswald;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  text-transform: uppercase;
  color: #00aeb3;
  display: flex;
  justify-content: center;
  margin-top: 13px;
}

 .how_it_works-instruction_1_description.description,
.how_it_works-instruction_2_description.description,
.how_it_works-instruction_3_description.description {
  margin-top: 15px;
  text-align: center;
} 

.how_it_works-instruction_1_image {
  background-image: url("../../public/img/icons/1-ikon.png");
}
.how_it_works-instruction_2_image {
  background-image: url("../../public/img/icons/2-ikon.png");
}
.how_it_works-instruction_3_image {
  background-image: url("../../public/img/icons/3-ikon.png");
}

.how_it_works-instruction_1_image.image,
.how_it_works-instruction_2_image.image,
.how_it_works-instruction_3_image.image {
  background-repeat: no-repeat;
  height: 145px;
  width: 145px;
  margin: auto;
}
</style>
