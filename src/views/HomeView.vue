<template>
  <div
    class="wrapper"
    :class="{
      'light-mode': !siteState.isDarkMode,
      'dark-mode': siteState.isDarkMode,
    }"
    id="top"
  >
    <!-- Notifications -->
    <!-- ====================================== -->
    <!-- ====================================== -->
    <div class="Notif isProcessing" v-if="siteState.isProcessing">
      <img src="../components/icons/Loading_gif.gif" alt="" srcset="" />
    </div>
    <!-- Email sent -->
    <!-- Email Notif -->
    <div
      class="Notif emailSent"
      v-show="siteState.emailSent"
      @click="siteState.emailSent = false"
    >
      <div
        class="content"
        v-show="siteState.emailSent"
        @click="siteState.emailSent = false"
      >
        <img src="../components/icons/plane_up.svg" alt="" srcset="" />
        <p>Your Mail has been sent, I'll get back to you As soon as possible</p>
      </div>
    </div>
    <div class="Notif emailNotSent" v-show="siteState.emailNotSent">
      <div class="content" @click="siteState.emailNotSent = false">
        <img src="../components/icons/plane_down.svg" alt="" srcset="" />
        <p>
          I'm sorry Your Mail wasn't Sent,please use another communication
          channels,I'll get back to you As soon as possible
        </p>
      </div>
    </div>
    <div class="Notif emailNotSent" v-show="siteState.emptyForm">
      <div class="content" @click="siteState.emptyForm = false">
        <img src="../components/icons/plane_down.svg" alt="" srcset="" />
        <p>Hey please fill up the form, or use any of the social links</p>
      </div>
    </div>
    <!-- ===================================== -->
    <!-- ===================================== -->
    <NavBar />
    <!-- Hero section -->
    <section class="hero">
      <div class="text-section">
        <p id="welcome">
          HI, WELCOME
          <img id="handShake" src="../components/icons/handShake.svg" alt="" />
        </p>
        <h2>
          My name is Emmanuel, I'm a
          <span id="fullStack"
            >&#128521;
            <VueWriter :array="['Frontend Developer', 'JAMstack Developer']" />
          </span>
        </h2>
        <p id="desc">
          I’ve been into coding and designing since 2019. I have designed and
          developed amazing products.
        </p>
        <div class="btn-row">
          <a
            id="downloadCV"
            href="https://drive.google.com/file/d/1TMP6REA-TnX_lBSHc9W09M7leNSBfNFX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../components/icons/cloud_download.svg" alt="" />
            <span>Download CV</span>
          </a>
          <a id="scroll" href="/#about">
            <span>Kindly Scroll down</span>
            <img
              v-if="siteState.isDarkMode"
              src="../components/icons/plane_down.svg"
              alt=""
              srcset=""
            />
            <img
              v-else
              src="../components/icons/plane_down_light.svg"
              alt=""
              srcset=""
            />
          </a>
        </div>
      </div>
      <div class="image-section">
        <img src="../components/icons/image_calling.svg" alt="" srcset="" />
      </div>
    </section>
    <div class="name-divider">
      <img
        v-if="siteState.isDarkMode"
        src="../components/icons/name-divider.svg"
        alt=""
        srcset=""
      />
      <img
        v-else
        src="../components/icons/name-divider-light.svg"
        alt=""
        srcset=""
      />
    </div>
    <section class="about" id="abouts">
      <AboutSect />
      <div class="name-divider">
        <img
          v-if="siteState.isDarkMode"
          src="../components/icons/name-divider.svg"
          alt=""
          srcset=""
        />
        <img
          v-else
          src="../components/icons/name-divider-light.svg"
          alt=""
          srcset=""
        />
      </div>
    </section>
    <section class="skills">
      <SkillsSect />
    </section>
    <section class="achieve">
      <AchieveSect />
    </section>
    <section class="works" id="work">
      <div class="name-divider">
        <img
          v-if="siteState.isDarkMode"
          src="../components/icons/name-divider.svg"
          alt=""
          srcset=""
        />
        <img
          v-else
          src="../components/icons/name-divider-light.svg"
          alt=""
          srcset=""
        />
      </div>
      <WorksSect />
    </section>
    <section class="testimonial">
      <TestimonialSect />
    </section>
    <section class="contact" id="contact">
      <ContactSect />
    </section>
    <FooterSect />
  </div>
</template>

<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
import AboutSect from "../components/AboutSect.vue";
import SkillsSect from "../components/SkillsSect.vue";
import AchieveSect from "@/components/AchieveSect.vue";
import WorksSect from "@/components/WorksSect.vue";
import TestimonialSect from "../components/TestimonialSect.vue";
import ContactSect from "../components/ContactSect.vue";
import FooterSect from "../components/FooterSect.vue";
import VueWriter from "vue-writer";
import { useSiteState } from "@/stores/siteState";
import { onMounted } from "vue";
const siteState = useSiteState();
onMounted(() => {
  siteState.getTestimonials();
  siteState.getGigs();
});
</script>

<style lang="scss">
@import "@/Global_styles/colors.scss";
.light-mode {
  background-color: $light-background;
  a,
  p,
  h2,
  h3,
  h5 {
    color: $dark_text;
  }
  #scroll {
    span {
      color: $dark_text;
    }
  }
  .swiper-slide {
    background-color: hsl(0, 0%, 90%);
  }
  form {
    background-color: hsl(0, 0%, 90%);
    color: $dark_text;
    button {
      p {
        color: #fff;
      }
    }
  }
  #whole {
    background-color: $alt_light;
  }
  .Notif {
    background-color: #f2f2f2be;
  }
}
.dark-mode {
  background-color: $dark-background;
  a,
  p,
  h2,
  h3,
  h5 {
    color: $white_text;
  }
  #scroll {
    span {
      color: $white_text;
    }
  }
  .swiper-slide {
    background-color: $alt_dark;
  }
  form {
    background-color: $alt_dark;
    input,
    textarea {
      background-color: $dark-background;
      color: #fff;
    }
  }
  #whole {
    background-color: $alt_dark;
  }
  .Notif {
    background-color: #111216e5;
  }
}
$main-font: "Montserrat", sans-serif;
body {
  background-color: $dark-background;
  font-family: "Montserrat", sans-serif;
  margin: 0px;
  padding: 0px;
  width: 100%;
  overflow-x: hidden;
  -webkit-overflow-x: hidden;
}
// style scrollbar
body::-webkit-scrollbar {
  width: 0em;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: #181035;
}
// Notification Style
.Notif {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 150;
  display: flex;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 16px;
    width: 30%;
    border-radius: 6px;
    img {
      align-self: center;
      width: 32px;
      height: auto;
    }
    p {
      color: #fff;
    }
  }
}
.isProcessing {
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    margin: 0px;
    padding: 0px;
  }
  gap: 0px;
}
.emailSent,
.emailNotSent {
  justify-content: center;
  align-items: center;
  margin: auto;
}
.emailSent {
  .content {
    background-color: #4415ff;
  }
}
.emailNotSent {
  .content {
    background-color: rgb(153, 1, 1);
  }
}
// Notification Styling End
// Notification styling Responsive
@media screen and (max-width: 1280px) {
  .Notif {
    .content {
      width: 50%;
    }
  }
}
@media screen and (max-width: 768px) {
  .Notif {
    .content {
      width: 70%;
    }
  }
}
.name-divider {
  position: relative;
  bottom: 0px;
  z-index: 2;
  img {
    max-width: 100%;
  }
}
#downloadCV {
  img {
    margin: none !important;
    width: 16px;
  }
  span {
    margin: none !important;
    font-size: 16px;
  }
  font-family: $main-font;
  background-color: $purple;
  width: fit-content;
  height: fit-content;
  border-radius: 30px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: $white_text;
  text-decoration: none;
}
.hero {
  display: grid;
  grid-template-areas:
    "text textsn image"
    "text textsn image"
    "text textsn image";
  background-image: url("../components/icons/blurry-background.png");
  background-size: contain;
  background-position: 110% 20%;
  background-repeat: no-repeat;
  .text-section {
    width: 84%;
    grid-area: text;
    align-self: center;
    justify-self: right;
    color: #fff;
    font-family: "Oxanium", cursive;
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-items: center;
    align-content: flex-end;
    #fullStack {
      color: $purple !important;
      div {
        display: inline;
      }
    }
    #welcome {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 14px;
      font-weight: bold;
      img {
        width: 40px;
      }
    }
    h2 {
      font-size: 64px;
      font-weight: bold;
      margin: 0px;
      width: 120%;
    }
    #desc {
      font-family: "Monstserrat", sans-serif;
      font-weight: 400;
      font-size: 16px;
      width: 70%;
    }
    .btn-row {
      display: flex;
      flex-direction: row;
      gap: 24px;
      margin: 4rem 0px 1rem 0px;
      #scroll {
        font-family: $main-font;
        text-decoration: none;
        display: flex;
        gap: 4px;
        background-color: none;
        color: #fff;
        align-items: center;
        img {
          width: 32px;
        }
        span {
          font-size: 14px;
        }
      }
    }
  }
  .image-section {
    grid-area: image;
    height: 90vh;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
}
.about {
  background-image: url("../components/icons/blurry-background.png");
  background-size: contain;
  background-position: 0% 20%;
  background-repeat: no-repeat;
}
@media screen and (max-width: 1024px) {
  // For tablet
  .hero {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 50% 50%;
    background-position: 130% 20%;
    .text-section {
      width: 84%;
      grid-column: 1;
      #welcome {
        font-size: 12px;
      }
      h2 {
        font-size: 32px;
      }
      #desc {
        width: 90%;
      }
      .btn-row {
        gap: 12px;
      }
    }
    .image-section {
      grid-column: 2;
      height: auto;
    }
  }
  .about {
    background-position: -80% 20%;
  }
}
@media screen and (max-width: 768px) {
  // For mobile
  .hero {
    margin-top: 3.5rem;
    display: flex;
    flex-direction: column;
    background-position: 100% 100%;
    gap: 8px;
    .text-section {
      width: 80%;
      text-align: center;
      justify-content: center;
      align-items: center;
      h2 {
        font-size: 28px;
        width: 120%;
      }
      #desc {
        font-size: 14px;
      }
      .btn-row {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
      }
    }
    .image-section {
      width: 100%;
      img {
        width: 80%;
      }
    }
  }
  .about {
    background-position: 100% 70%;
  }
}
@media screen and (max-width: 400px) {
  // Small mobile
  .hero {
    .text-section {
      h2 {
        font-size: 24px;
      }
      #desc {
        font-size: 12px;
      }
    }
  }
}
</style>
