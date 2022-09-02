<template>
  <div id="skills">
    <div class="title">
      <img src="../components/icons/port-divider.svg" alt="" srcset="" />
      <p>SKILLS</p>
    </div>
    <div class="control-tab">
      <div
        id="design"
        :class="{ active: clickedBox == 'design' }"
        @click="clickedBox = 'design'"
      >
        <img src="../components/icons/design-icon.svg" alt="" srcset="" />
        <p>DESIGN</p>
        <img
          :src="clickedBox == 'design' ? caratUp : caratDown"
          alt=""
          srcset=""
        />
      </div>
      <div
        id="frontend"
        :class="{ active: clickedBox == 'frontend' }"
        @click="clickedBox = 'frontend'"
      >
        <img src="../components/icons/frontend-icon.svg" alt="" srcset="" />
        <p>FRONTEND</p>
        <img
          :src="clickedBox == 'frontend' ? caratUp : caratDown"
          alt=""
          srcset=""
        />
      </div>
      <div
        id="backend"
        :class="{ active: clickedBox == 'backend' }"
        @click="clickedBox = 'backend'"
      >
        <img src="../components/icons/backend-icon.svg" alt="" srcset="" />
        <p>BACKEND</p>
        <img
          :src="clickedBox == 'backend' ? caratUp : caratDown"
          alt=""
          srcset=""
        />
      </div>
    </div>
    <!-- Skill box -->
    <div class="skill-box">
      <div v-if="clickedBox == 'design'" class="design-box">
        <ProgressBar title="Figma" width="70" />
        <ProgressBar title="Sketch" width="60" />
        <ProgressBar title="Canva" width="80" />
      </div>
      <div v-if="clickedBox == 'frontend'" class="frontend-box">
        <ProgressBar title="HTML" width="80" />
        <ProgressBar title="CSS, SCSS" width="90" />
        <ProgressBar title="tailwindCSS, Bootstrap" width="80" />
        <ProgressBar title="Javascript" width="90" />
        <ProgressBar title="React" width="60" />
        <ProgressBar title="Vue" width="90" />
        <ProgressBar title="AdonisJs" width="50" />
      </div>
      <div v-if="clickedBox == 'backend'" class="backend-box">
        <ProgressBar title="Nodejs/Express" width="80" />
        <ProgressBar title="PHP" width="70" />
        <ProgressBar title="Python" width="60" />
        <ProgressBar title="MongoDB" width="80" />
        <ProgressBar title="PostMan" width="70" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ProgressBar from "./ProgressBar.vue";
const caratDown = ref("src/components/icons/carat-down.svg");
const caratUp = ref("src/components/icons/carat-up.svg");
const clickedBox = ref("frontend");
</script>

<style lang="scss" scoped>
// dynamic classes
.active p{
  color: #4415ff !important;
}
#skills {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0px auto;
  color: #fff;
  .title {
    display: flex;
    gap: 4px;
    img {
      max-width: 200px;
    }
  }
  .control-tab {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin: 1.5rem 0px 2rem;
    div {
      display: flex;
      gap: 4px;
      cursor: pointer;
    }
  }
  .skill-box {
    width: 65%;
    display: flex;
    margin: 3rem auto 1rem;
    div {
      width: 100%;
    }
  }
}
@media screen and (max-width: 1024px){
  // Tablet
  #skills{
    .skill-box{
      width: 75%;
    }
  }
}
@media screen and (max-width: 768px){
  // mobile
  #skills{
    margin-top: 1rem;
    width: 85%;
    .control-tab{
      div{
        img{
          max-width: 24px;
        }
        p{
          font-size: 10px;
        }
      }
    }
    .skill-box{
      width: 90%;
      margin: 1rem auto;
    }
  }
}
</style>
