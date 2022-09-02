<template>
  <div id="works" :class="{'light-mode': !siteState.isDarkMode,'dark-mode': siteState.isDarkMode}">
    <div class="title">
      <img src="../components/icons/port-divider.svg" alt="" srcset="" />
      <p>WORKS/SERVICES</p>
    </div>
    <div class="talker">
      <h3>Some Interesting projects I have worked on</h3>
    </div>
  </div>
  <!-- Carousel... -->
  <GigsCarousel/>
</template>

<script setup lang="ts">
import GigsCarousel from "./GigsCarousel.vue";
import { useSiteState } from "@/stores/siteState";
const siteState = useSiteState()
</script>

<style lang="scss" scoped>
#works {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0px auto;
  .title {
    display: flex;
    gap: 4px;
    img {
      max-width: 200px;
    }
  }
  .talker {
    width: 60%;
    margin: 2.5rem auto;
    text-align: left;
    h3 {
      font-size: 32px;
    }
  }
}
@media screen and (max-width: 768px) {
  // mobile
  #works{
    width: 90%;
    .title{
      img{
        max-width: 150px;
      }
    }
    .talker{
      width: 90%;
      margin: 1rem auto;
      text-align: center;
      h3{
        font-size: 20px;
      }
    }
  }
}
</style>
