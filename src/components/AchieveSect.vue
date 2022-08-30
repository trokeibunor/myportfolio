<template>
  <div id="achieve">
    <div class="title">
      <img src="../components/icons/port-divider.svg" alt="" srcset="" />
      <p>NOTABLE ACHIEVEMENTS</p>
    </div>
    <div class="content">
      <div class="education-box">
        <img src="../components/icons/education-icon.svg" alt="" srcset="" />
        <div class="info-box">
          <h5>B.Eng Petroleum Engineering(in view)</h5>
          <p>University of Benin</p>
          <p>2017 - 2022</p>
        </div>
        <div class="info-box">
          <h5>Python, Html, Css, Javascript, PHP</h5>
          <p>SoloLearn Certicication</p>
          <p>2018</p>
        </div>
        <div class="info-box">
          <h5>WordPress, Basics of Web design, SEO management</h5>
          <p>Udemy Certicication</p>
          <p>2019</p>
        </div>
        <div class="info-box">
          <h5>Vue3 composition and options API</h5>
          <p>Udemy Certicication</p>
          <p>2021</p>
        </div>
        <div class="info-box">
          <h5>React, Redux</h5>
          <p>Scrimba Certicication</p>
          <p>2022</p>
        </div>
        <div class="info-box">
          <h5>Mongo Db, FirebaseDb</h5>
          <p>Udemy Certicication</p>
          <p>2022</p>
        </div>
      </div>
      <div class="work-box">
        <img src="../components/icons/work_icon.svg" alt="" srcset="" />
        <div class="info-box">
          <h5>NPDC Benin, Reservoir Engineering(intership)</h5>
          <p>Edo State,Nigeria</p>
          <p>2022</p>
        </div>
        <div class="info-box">
          <h5>President, SPE UNIBEN Chapter</h5>
          <p>Edo State,Nigeria</p>
          <p>2022</p>
        </div>
        <div class="info-box">
          <h5>Vice-chairman,Uniben Energy Club</h5>
          <p>Edo State,Nigeria</p>
          <p>2022</p>
        </div>
        <div class="info-box">
          <h5>Pawklan Wears, Web developer/designer</h5>
          <p>Remote (FreeLance Role)</p>
          <p>2020</p>
        </div>
        <div class="info-box">
          <h5>Ez-Exchange, crypto services, Web developer/designer</h5>
          <p>Remote (FreeLance Role)</p>
          <p>2022</p>
        </div>
        <div class="info-box">
          <h5>Asseter, crypto services, Web developer/designer</h5>
          <p>Remote (FreeLance Role)</p>
          <p>2022</p>
        </div>
        <div class="info-box">
          <h5>Grid Crypto, crypto services, Web designer</h5>
          <p>Remote (FreeLance Role)</p>
          <p>2022</p>
        </div>
      </div>
    </div>
    <div class="see_through">
      <p>20+ Git Projects</p>
      <p>2+ Years of Experience</p>
      <p>4+ companies worked for</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#achieve {
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
  .content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div {
      margin: 3.5rem 0px;
      padding: 1rem;
      width: 40%;
      display: flex;
      flex-direction: column;
      background-color: #181c28;
      border-radius: 8px;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 20%;
        height: 150px;
      }
      .info-box {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        h5 {
          font-size: 18px;
        }
        p,
        h5 {
          margin: 0;
          padding: 0;
          text-align: center;
        }
      }
    }
  }
  .see_through {
    display: flex;
    justify-content: space-around;
    p {
      border: 1px solid #fff;
      border-radius: 50%;
      padding: 16px 18px;
    }
  }
}
</style>
