<template>
  <div class="main" :class="{'light-mode': !siteState.isDarkMode,'dark-mode': siteState.isDarkMode}">
    <div class="content">
      <div class="name">{{ props.title }}</div>
      <div class="bottom">
        <div class="progress-bar">
          <div class="progress" :style="width"></div>
        </div>
        <p>{{ props.width }}%</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useSiteState } from "@/stores/siteState";
const siteState = useSiteState()
const props = defineProps(["title", "width"]);
const width = ref(`width: ${props.width}%`);
</script>
<style lang="scss" scoped>
@import "@/Global_styles/colors.scss";
.light-mode{
  border: 1px solid #181c283a;
  .content{
    .name{
      color: $dark_text
    }
    .progress-bar{
      background-color: $alt_light;
    }
  }
}
.dark-mode{
  border: 1px solid $white_text;
  .content{
    .progress-bar{
    background-color: $alt_dark;
  }
  }
}
.main {
  width: 100%;
  border-radius: 4px;
  padding: 1rem 0px;
  margin: 1rem 0px;
  .content {
    width: 80%;
    margin: auto;
    .bottom {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .progress-bar {
      border-radius: 4px;
      width: 100%;
      height: 8px;
      .progress {
        background-color: #4415ff;
        height: 8px;
      }
    }
  }
}
@media screen and (max-width: 768px){
  .main{
    padding: 0.5rem 0px;
    .content{
      .name{
        font-size: 12px;
      }
      .bottom{
        gap: 6px;
      }
      .progress-bar{
        height: 6px;
        .progress{
          height: 6px;
        }
      }
      p{
        font-size: 12px;
      }
    }
  }
}
</style>
