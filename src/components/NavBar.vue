<script setup lang="ts"></script>
<template>
  <nav>
    <div class="nav-content">
      <img src="../components/icons/dark_logo.svg" alt="" srcset="" />
      <div class="nav-link">
        <a href="#">Works</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <img src="../components/icons/moon_icon.svg" alt="" />
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
$light-background: #f2f2f2;
$dark-background: #111216;
nav {
  width: 100%;
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
        color: #fff;
        font-size: 16px;
      }
      img {
        max-height: 24px;
      }
    }
  }
}
</style>
