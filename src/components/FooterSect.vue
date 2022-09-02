<template>
  <div id="whole">
    <div class="inner">
      <a href="mailto:okeibunoremma@gmail.com">
        <img src="../components/icons/email_icon.svg" alt="" />
        <p>okeibunoremma@gmail.com</p>
      </a>
      <a href="tel:+234 9015379412">
        <img src="../components/icons/phone_icon.svg" alt="" srcset="" />
        <p>09015379412</p>
      </a>
    </div>
  </div>
  <div class="nav-clone">
    <nav>
    <div class="nav-content">
      <img v-if="siteState.isDarkMode" src="../components/icons/dark_logo.svg" alt="" srcset="" />
      <img v-else src="../components/icons/light_logo.svg" alt="" srcset="" />
      <div class="nav-link">
        <p>Copyright &copy; okeibunoremma 2022</p>
        <img v-if="siteState.isDarkMode" @click="siteState.toggleDarkMode" src="../components/icons/moon_icon.svg" alt="" />
        <img v-else @click="siteState.toggleDarkMode" src="../components/icons/sun_icon.svg" alt="" />
      </div>
    </div>
  </nav>
  </div>
</template>

<script setup lang="ts">
  import { useSiteState } from '@/stores/siteState';
  const siteState = useSiteState()
</script>

<style lang="scss" scoped>
#whole {
  width: 100%;
  padding: 0.5rem 0px;
  .inner {
    width: 70%;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    a {
      text-decoration: none;
      display: flex;
    }
  }
}
nav {
  width: 100%;
  .nav-content {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px auto;
    padding: 3rem 0px;
    img {
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
      img {
        max-height: 24px;
        cursor: pointer;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  // Mobile
  #whole{
    .inner{
      flex-direction: column;
    }
  }
  nav{
    .nav-content{
      padding: 1.5rem 0px;
      .nav-link{
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column-reverse;
        gap: 4px;
        p{
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
    
  }
}
</style>
