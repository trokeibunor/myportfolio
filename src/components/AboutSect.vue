<template>
  <div id="about">
    <div class="title">
      <img src="../components/icons/port-divider.svg" alt="" srcset="" />
      <p>ABOUT ME</p>
    </div>
    <div class="about-grid">
      <div class="image-holder">
        <img
          id="boy-img"
          src="../components/icons/boy_reading.svg"
          alt=""
          srcset=""
        />
      </div>
      <div class="text-grid">
        <h3>Get to know Emmanuel Okeibunor</h3>
        <p>
          I’ve been into coding and designing since i was 18. I have designed
          and developed lots of amzing products etc. I’m very much familiar with
          these tools and many more.
        </p>
        <p>
          I love football, Up Chelsea, lol. I enjoy interesting conversations,
          learning new things, civil debates. I enjoy new challanges. I'm sure
          I'll enjoy talking with you about your project, well find out more in my CV I guess.
        </p>
        <div id="sect_title">
          <img src="../components/icons/port-divider.svg" alt="" srcset="" />
          <p>I enjoy</p>
        </div>
        <!-- Things I enjoy -->
        <div class="enjoyables">
          <p>Developing</p>
          <p>Designing</p>
          <p>Football</p>
          <p>Reading</p>
        </div>
        <a id="downloadCV" href="#" target="_blank" rel="noopener noreferrer">
          <img src="../components/icons/cloud_download.svg" alt="" />
          <span>Download CV</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#about {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0px auto;
  color: #fff;
  position: relative;
  .title {
    display: flex;
    gap: 4px;
    img {
      max-width: 200px;
    }
  }
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-image: url("../components/icons/blurry-background.svg");
    .image-holder {
      img#boy-img {
        width: 40vw;
        height: auto;
      }
    }
    .text-grid {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 8px;
      h3 {
        font-size: 32px;
        margin: 0px;
      }
      p {
        margin: 0px;
      }
      #sect_title {
        margin-top: 2.5rem;
        display: flex;
        gap: 4px;
        align-items: center;
        img {
          max-width: 150px;
        }
        p {
          font-weight: 600;
          font-size: 16px;
        }
      }
      .enjoyables {
        display: flex;
        flex-direction: row;
        gap: 12px;
        margin: 1rem 0px;
        p {
          border: 1px solid #fff;
          padding: 10px 20px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
