<script setup lang="ts">
  import { useSiteState } from '@/stores/siteState';
  const siteState = useSiteState();
</script>
<template>
  <nav :class="{'light-mode': !siteState.isDarkMode,'dark-mode': siteState.isDarkMode}">
    <div  class="nav-content">
      <img class="logo" v-if="siteState.isDarkMode" src="../components/icons/dark_logo.svg" alt="" srcset="" />
      <img class= "logo" v-else src="../components/icons/light_logo.svg" alt="" srcset="" />
      <div class="nav-link">
        <a href="/#work">Works</a>
        <a href="/#abouts">About</a>
        <a href="/#contact">Contact</a>
        <img class="switcher" v-if="siteState.isDarkMode" @click="siteState.toggleDarkMode" src="../components/icons/moon_icon.svg" alt="" />
        <img class="switcher" v-else @click="siteState.toggleDarkMode" src="../components/icons/sun_icon.svg" alt="" />
      </div>
      <div class="menu_toggler">
        <img class="switcher" v-if="siteState.isDarkMode" @click="siteState.toggleDarkMode" src="../components/icons/moon_icon.svg" alt="" />
        <img class="switcher" v-else @click="siteState.toggleDarkMode" src="../components/icons/sun_icon.svg" alt="" />
        <img class="toggler" v-if="siteState.isDarkMode" src="../components/icons/menu_toggler_dark.svg" alt="" srcset=""/>
        <img class="toggler" v-else src="../components/icons/menu_toggler_light.svg" alt="" srcset=""/>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
@import "@/Global_styles/colors.scss";
.light-mode{
  background-color: $light-background;
  a{
    color:$dark_text
  }
}
.dark-mode{
  background-color: $dark-background;
  a{
    color: $white_text
  }
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
    .menu_toggler{
      display: none;
    }
  }
}
@media screen and (max-width: 768px){
  // mobile
  nav{
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 10;
    
    background-color: $dark-background;
    .nav-content{
      width: 90%;
      padding: 1.5rem 0px;
      .nav-link{
        display: none;
      }
      .menu_toggler{
        display: flex;
        align-items: center;
        gap: 12px;
        .toggler{
          width: 23px;
          height: 23px;
        }
      }
    }
  }
}

</style>
