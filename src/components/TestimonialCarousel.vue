<template>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="item in siteState.testimonials" :key="item.Name">
      <img
        id="testIcon"
        src="../components/icons/testimonial_icon.svg"
        alt=""
        srcset=""
      />
      <p id="testimony">
        <img
          class="quotes"
          src="../components/icons/quotesOpen.svg"
          alt=""
          srcset=""
        />
        {{ item.testimonial }}
        <img
          class="quotes"
          src="../components/icons/quotesClose.svg"
          alt=""
          srcset=""
        />
      </p>
      <p id="info">
        {{ item.Name }} <span>{{ item.position }} @ {{ item.Workplace }}</span>
      </p>
    </swiper-slide>
  </swiper>
</template>
<script lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { useSiteState } from "@/stores/siteState";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./style.css";
// import required modules
import { EffectCards } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const siteState = useSiteState();
    // onMounted(() => {
    //   siteState.getTestimonials();
    // });
    return {
      siteState,
      modules: [EffectCards],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/Global_styles/colors.scss";
.swiper-slide {
  text-align: left;
  border-radius: 8px;
  padding: 4px 24px;
  background-color: $alt_dark;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: flex-start;
}
#testIcon {
  width: 20%;
  height: 30%;
}
.quotes {
  width: 15px;
  height: 15px;
}
#testimony {
  display: flex;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
#info {
  font-family: "Space Grotesk", sans-serif;
  text-align: left;
  font-size: 18px;
  font-weight: Bold;
  span {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    color: #613aff;
  }
}
@media screen and (max-width: 768px) {
  #testimony {
    font-size: 10px;
  }
  #info {
    font-size: 12px;
    span {
      font-size: 10px;
    }
  }
}
</style>
