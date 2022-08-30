<template>
  <div class="main">
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

const props = defineProps(["title", "width"]);
const width = ref(`width: ${props.width}%`);
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  border: 1px solid #fff;
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
      background-color: #212121;
      .progress {
        background-color: #4415ff;
        height: 8px;
      }
    }
  }
}
</style>
