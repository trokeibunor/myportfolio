<template>
  <div id="testimonial">
    <div class="title">
      <img src="../components/icons/port-divider.svg" alt="" srcset="" />
      <p>TESTIMONIALS</p>
    </div>
    <div class="card-holder">
      <TestimonialCarousel />
    </div>
  </div>
</template>

<script setup lang="ts">
import TestimonialCarousel from "./TestimonialCarousel.vue";
</script>

<style lang="scss" scoped>
#testimonial {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0px auto;
  color: #fff;
  position: relative;
  .title {
    display: flex;
    gap: 4px;
    img {
      max-width: 200px;
    }
  }
}

.card-holder {
  width: 80%;
  margin: 0px auto;
}
@media screen and (max-width: 768px) {
  #testimonial {
    width: 90%;
    .title {
      img {
        max-width: 150px;
      }
    }
  }
  .card-holder {
    width: 60%;
    margin: 0px auto;
  }
}
</style>
