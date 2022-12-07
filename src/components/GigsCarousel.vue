<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="item in siteState.gigs" :key="item.Name"
      ><img :src="item.ImgLink" />
      <p>
        {{ item.shortDesc }}
      </p>
      <div class="btn-row">
        <a :href="item.Link" id="site" target="_blank">View Site</a>
        <a :href="item.GitHubLink" id="code" target="_blank">View Code</a>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { useSiteState } from "@/stores/siteState";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const siteState = useSiteState();
    return {
      siteState,
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>
<style>
.swiper {
  width: 100%;
  padding-top: 15px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  width: 300px;
  height: auto;
}

.swiper-slide img {
  display: block;
  width: 100%;
  border-radius: 8px 8px 0px 0px;
}
.swiper-slide p {
  font-size: 12px;
  padding: 0px 8px;
}
.btn-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}
#site {
  padding: 8px 16px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 20px;
  text-decoration: none;
  color: #fff;
  background-color: #4415ff;
}
#code {
  padding: 8px 16px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 20px;
  text-decoration: none;
  color: #fff;
  background-color: rgb(75, 74, 74);
}
</style>
