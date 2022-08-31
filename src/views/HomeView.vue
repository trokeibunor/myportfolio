<template>
  <div class="wrapper">
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
          <span id="fullStack">full-stack developer</span>
        </h2>
        <p id="desc">
          I’ve been into coding and designing since i was 16. I have designed
          and developed lots of amazing products etc.
        </p>
        <div class="btn-row">
          <a id="downloadCV" href="#" target="_blank" rel="noopener noreferrer">
            <img src="../components/icons/cloud_download.svg" alt="" />
            <span>Download CV</span>
          </a>
          <a id="scroll" href="#">
            <span>Kindly Scroll down</span>
            <img src="../components/icons/plane_down.svg" alt="" srcset="" />
          </a>
        </div>
      </div>
      <div class="image-section">
        <img src="../components/icons/image_calling.svg" alt="" srcset="" />
      </div>
    </section>
    <div class="name-divider">
      <img src="../components/icons/name-divider.svg" alt="" srcset="" />
    </div>
    <section class="about">
      <AboutSect />
      <div class="name-divider">
        <img src="../components/icons/name-divider.svg" alt="" srcset="" />
      </div>
    </section>
    <section class="skills">
      <SkillsSect />
    </section>
    <section class="achieve">
      <AchieveSect />
    </section>
    <section class="works">
      <div class="name-divider">
        <img src="../components/icons/name-divider.svg" alt="" srcset="" />
      </div>
      <WorksSect/>
    </section>
    <section class="testimonial">
      <TestimonialSect/>
    </section>
    <section class="contact">
      <ContactSect/>
    </section>
    <FooterSect/>
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
import FooterSect from "../components/FooterSect.vue"
</script>

<style lang="scss">
$light-background: #f2f2f2;
$dark-background: #111216;
$purple: #4415ff;
$main-font: "Montserrat", sans-serif;
body {
  background-color: $dark-background;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0px;
  overflow-x: hidden;
}
// style scrollbar
body::-webkit-scrollbar {
  width: 1em;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: #181035;
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
  color: #fff;
  text-decoration: none;
}
.hero {
  display: grid;
  grid-template-areas:
    "text textsn image"
    "text textsn image"
    "text textsn image";
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
      color: $purple;
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
    background-image: url("../components/icons/blurry-background.svg");
    background-position: top 75%;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
}
.name-divider {
  position: relative;
  bottom: 0px;
  z-index: -1;
  img {
    max-width: 100%;
  }
}
</style>
