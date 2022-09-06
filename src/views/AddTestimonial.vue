<template>
  <div
    class="wrapper"
    :class="{
      'light-mode': !siteState.isDarkMode,
      'dark-mode': siteState.isDarkMode,
    }"
  >
    <div class="container">
      <div class="nav-clone">
        <nav>
          <div class="nav-content">
            <img
              v-if="siteState.isDarkMode"
              src="../components/icons/dark_logo.svg"
              alt=""
              srcset=""
            />
            <img
              v-else
              src="../components/icons/light_logo.svg"
              alt=""
              srcset=""
            />
            <div class="nav-link">
              <!-- <p>Copyright &copy; okeibunoremma 2022</p> -->
              <img
                v-if="siteState.isDarkMode"
                @click="siteState.toggleDarkMode"
                src="../components/icons/moon_icon.svg"
                alt=""
              />
              <img
                v-else
                @click="siteState.toggleDarkMode"
                src="../components/icons/sun_icon.svg"
                alt=""
              />
            </div>
          </div>
        </nav>
      </div>
      {{ password }}
      {{ viewer }}
      <div class="passwordProtection" v-if="!viewer">
        <p>Hey this page is password protected</p>
        <input
          :class="{ active: checker }"
          type="password"
          v-model="password"
        />
        <button @click="checker">Enter</button>
      </div>
    </div>
    <FooterSect />
  </div>
</template>

<script setup lang="ts">
import { useSiteState } from "@/stores/siteState";
import FooterSect from "@/components/FooterSect.vue";
import { ref } from "vue";
const password = ref("");
const viewer = ref(false);
const siteState = useSiteState();
// conditionals
const checker = function () {
  if (password.value == "okeibunoremma") {
    viewer.value == true;
  }
  alert(password.value)
  console.log(password.value);
  console.log(viewer.value);
};
</script>

<style lang="scss" scoped>
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
    button {
      p {
        color: #fff;
      }
    }
  }
  #whole {
    background-color: $alt_light;
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
    }
  }
  #whole {
    background-color: $alt_dark;
  }
}
.active {
  border: 1px solid rgb(8, 85, 8);
}
.wrapper {
  width: 100%;
  min-height: 100vh;
  .container {
    height: 90vh;
  }
  .passwordProtection {
    width: 40%;
    margin: auto;
    display: flex;
    flex-direction: column;
    -webkit-gap: 8px;
    gap: 8px;
    input {
      padding: 8px 0px 8px 10px;
      border: none;
      outline: none;
      font-size: 16px;
    }
  }
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
</style>
