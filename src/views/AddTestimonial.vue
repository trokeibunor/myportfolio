<template>
  <div
    class="wrapper"
    :class="{
      'light-mode': !siteState.isDarkMode,
      'dark-mode': siteState.isDarkMode,
    }"
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
        <p>Your Testimonial has been received I really appreciate the effort</p>
      </div>
    </div>
    <div class="Notif emailNotSent" v-show="siteState.emailNotSent">
      <div class="content" @click="siteState.emailNotSent = false">
        <img src="../components/icons/plane_down.svg" alt="" srcset="" />
        <p>
          Your Testimonial couldn't be added, maybe some issue with the
          database, please inform me about this.
        </p>
      </div>
    </div>
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
      <div class="passwordProtection" v-if="!viewer">
        <p>Hey this page is password protected</p>
        <input type="password" v-model="password" @keyup="checker" />
      </div>
      <div class="testimonialForm" v-else>
        <p id="intro">Add Testimonial</p>
        <form @submit.prevent="addTestimonial">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            v-model="user.name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            v-model="user.email"
          />
          <input type="text" placeholder="Position" v-model="user.position" />
          <input
            type="text"
            placeholder="Work Place"
            v-model="user.workPlace"
          />
          <textarea
            name="testimonial"
            rows="8"
            placeholder="Testimonial"
            v-model="user.testimonial"
            @keyup="textCounter"
            maxlength="170"
          ></textarea>
          <div class="sub-row">
            <p class="small">text count: {{ user.testimonial.length }} / 170</p>
            <button type="submit">Submit Testimonial</button>
          </div>
        </form>
      </div>
    </div>
    <FooterSect />
  </div>
</template>

<script setup lang="ts">
import { useSiteState } from "@/stores/siteState";
import FooterSect from "@/components/FooterSect.vue";
import { ref, reactive } from "vue";
const password = ref("");
const viewer = ref(false);
const siteState = useSiteState();
// conditionals
const checker = function () {
  if (password.value == "okeibunoremma") {
    viewer.value = true;
  }
};
const textCounter = function () {
  console.log(user.testimonial.length);
};
const user = reactive({
  name: "",
  email: "",
  position: "",
  workPlace: "",
  testimonial: "",
});
function addTestimonial() {
  siteState.addTestimonial(user);
  user.name = "";
  user.email = "";
  user.position = "";
  user.workPlace = "";
  user.testimonial = "";
}
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
    input,
    textarea {
      background-color: #fff;
      color: $dark_text;
    }
    .sub-row {
      button {
        background-color: #2a1d5ada;
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
    input,
    textarea {
      background-color: $light-background;
      color: $dark_text;
    }
    .sub-row {
      button {
        background-color: #2a1d5ada;
        color: #fff;
      }
    }
  }
  #whole {
    background-color: $alt_dark;
  }
}
.active {
  border: 2px solid rgb(8, 85, 8);
  transform: scale(1.5);
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
.wrapper {
  width: 100%;
  min-height: 100vh;
  .container {
    min-height: 90vh;
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
  .testimonialForm {
    width: 30%;
    margin: 0.5rem auto;
    #intro {
      font-weight: 600;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 8px;
      -webkit-gap: 8px;
      padding: 24px 16px;
      border-radius: 4px;
      input,
      textarea {
        width: 95%;
        border: none;
        border-radius: 4px;
        outline: none;
        padding: 10px 0px 10px 12px;
      }
      .sub-row {
        display: flex;
        justify-content: space-between;
        .small {
          font-size: 14px;
          font-weight: 600;
        }
        button {
          cursor: pointer;
          border-radius: 6px;
          font-weight: 600;
          padding: 4px 12px;
          outline: none;
          border: none;
        }
      }
    }
  }
  @media screen and (max-width: 1280px) {
    .sub-row {
      .small {
        font-size: 8px;
      }
    }
    .testimonialForm {
      width: 80%;
    }
    .passwordProtection {
      width: 80%;
    }
  }
  .nav-content {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px auto;
    padding: 1rem 0px;
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
