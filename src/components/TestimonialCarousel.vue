<template>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
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
        I’ve been into coding and designing since i was 16. I have designed and
        developed lots of amazing products etc. I’m very much farmilia with
        these tools and many more
        <img
          class="quotes"
          src="../components/icons/quotesClose.svg"
          alt=""
          srcset=""
        />
      </p>
      <p id="info">
        OKEIBUNOR FAVOUR OSEMEDUA <span>Developer @ God Abeg</span>
      </p>
    </swiper-slide>
    <swiper-slide>
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
        I’ve been into coding and designing since i was 16. I have designed and
        developed lots of amzing products etc. I’m very much farmilia with these
        tools and many more
        <img
          class="quotes"
          src="../components/icons/quotesClose.svg"
          alt=""
          srcset=""
        />
      </p>
      <p id="info">
        OKEIBUNOR FAVOUR OSEMEDUA <span>Developer @ God Abeg</span>
      </p>
    </swiper-slide>
    <swiper-slide>
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
        I’ve been into coding and designing since i was 16. I have designed and
        developed lots of amzing products etc. I’m very much farmilia with these
        tools and many more
        <img
          class="quotes"
          src="../components/icons/quotesClose.svg"
          alt=""
          srcset=""
        />
      </p>
      <p id="info">
        OKEIBUNOR FAVOUR OSEMEDUA <span>Developer @ God Abeg</span>
      </p>
    </swiper-slide>
    <swiper-slide>
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
        I’ve been into coding and designing since i was 16. I have designed and
        developed lots of amzing products etc. I’m very much farmilia with these
        tools and many more
        <img
          class="quotes"
          src="../components/icons/quotesClose.svg"
          alt=""
          srcset=""
        />
      </p>
      <p id="info">
        OKEIBUNOR FAVOUR OSEMEDUA <span>Developer @ God Abeg</span>
      </p>
    </swiper-slide>
  </swiper>
</template>
<script lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

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
    return {
      modules: [EffectCards],
    };
  },
};
</script>
<style lang="scss" scoped>
.swiper-slide {
  text-align: left;
  background: #181c28;
  border-radius: 8px;
  padding: 4px 24px;

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
  text-align: left;
  font-size: 18px;
  font-weight: Bold;
  span {
    font-size: 15px;
    color: #613aff;
  }
}
</style>
