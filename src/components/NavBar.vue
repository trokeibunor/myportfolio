<script setup lang="ts">
import { ref } from "vue";
import { useSiteState } from "@/stores/siteState";
const siteState = useSiteState();
const dropDown = ref(false);
</script>
<template>
  <nav
    :class="{
      'light-mode': !siteState.isDarkMode,
      'dark-mode': siteState.isDarkMode,
    }"
  >
    <div class="nav-content">
      <img
        class="logo"
        v-if="siteState.isDarkMode"
        src="../components/icons/dark_logo.svg"
        alt=""
        srcset=""
      />
      <img
        class="logo"
        v-else
        src="../components/icons/light_logo.svg"
        alt=""
        srcset=""
      />
      <div class="nav-link">
        <a href="/#top">Home</a>
        <a href="/#abouts">About</a>
        <a href="/#work">Works</a>
        <a href="/#contact">Contact</a>
        <img
          class="switcher"
          v-if="siteState.isDarkMode"
          @click="siteState.toggleDarkMode"
          src="../components/icons/moon_icon.svg"
          alt=""
        />
        <img
          class="switcher"
          v-else
          @click="siteState.toggleDarkMode"
          src="../components/icons/sun_icon.svg"
          alt=""
        />
      </div>
      <div class="menu_toggler">
        <img
          class="switcher"
          v-if="siteState.isDarkMode"
          @click="siteState.toggleDarkMode"
          src="../components/icons/moon_icon.svg"
          alt=""
        />
        <img
          class="switcher"
          v-else
          @click="siteState.toggleDarkMode"
          src="../components/icons/sun_icon.svg"
          alt=""
        />
        <template v-if="siteState.isDarkMode">
          <img
            class="toggler"
            @click="dropDown = !dropDown"
            v-if="dropDown == false"
            src="../components/icons/menu_toggler_dark.svg"
            alt=""
            srcset=""
          />
          <img
            class="toggler"
            @click="dropDown = !dropDown"
            v-else
            src="../components/icons/dark_cancel.svg"
            alt=""
            srcset=""
          />
        </template>
        <template v-else>
          <img
            class="toggler"
            @click="dropDown = !dropDown"
            v-if="dropDown == false"
            src="../components/icons/menu_toggler_light.svg"
            alt=""
            srcset=""
          />
          <img
            class="toggler"
            @click="dropDown = !dropDown"
            v-else
            src="../components/icons/light_cancel.svg"
            alt=""
            srcset=""
          />
        </template>
      </div>
    </div>
    <transition name="fade">
      <!-- Mobile Menu -->
      <div class="mobile-drop" v-if="dropDown">
        <a href="/#top" @click="dropDown = false" class="mobile-nav">Home</a>
        <a href="/#abouts" @click="dropDown = false" class="mobile-nav"
          >About</a
        >
        <a href="/#work" @click="dropDown = false" class="mobile-nav">Works</a>
        <a href="/#contact" @click="dropDown = false" class="mobile-nav"
          >Contact</a
        >
      </div>
    </transition>
  </nav>
</template>
<style lang="scss" scoped>
@import "@/Global_styles/colors.scss";
.light-mode {
  background-color: $light-background;
  a {
    color: $dark_text;
  }
  .mobile-drop {
    background-color: hsl(0, 0%, 90%);
  }
}
.dark-mode {
  background-color: $dark-background;
  a {
    color: $white_text;
  }
  .mobile-drop {
    background-color: $alt-dark;
  }
}
// animation
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
nav {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;

  .nav-content {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px auto;
    padding: 1rem 0px;
    img.logo {
      max-height: 32px;
      max-width: 153px;
    }
    .nav-link {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 40px;
      a {
        text-decoration: none;
        font-size: 16px;
      }
      img.switcher {
        max-height: 24px;
        cursor: pointer;
      }
    }
    .menu_toggler {
      display: none;
    }
  }
  .mobile-drop {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  // mobile
  nav {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: $dark-background;
    .nav-content {
      width: 90%;
      padding: 1.5rem 0px;
      .nav-link {
        display: none;
      }
      .menu_toggler {
        display: flex;
        align-items: center;
        gap: 12px;
        .toggler {
          width: 23px;
          height: 23px;
        }
      }
    }
    .mobile-drop {
      display: flex;
      flex-direction: column;

      position: absolute;
      width: 100%;
      top: 100%;
      z-index: 10;
      padding: 0.5rem 0px;
      .mobile-nav {
        margin: 1.25rem;
        text-decoration: none;
        font-weight: 600;
      }
    }
  }
}
</style>
