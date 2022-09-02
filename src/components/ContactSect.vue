<template>
  <div id="contacts">
    <div class="title">
      <img src="../components/icons/port-divider.svg" alt="" srcset="" />
      <p>CONTACT ME NOW</p>
    </div>
    <div class="toaster">
      <h3>I'm here to make your dream become a reality.</h3>
    </div>
    <div class="contact-holder">
      <div class="icon-stack">
        <a href="https://www.instagram.com/t.r_hazard/" target="_blank">
          <img src="../components/icons/Instagram.svg" alt="" />
        </a>
        <a href="https://twitter.com/tr_hazard" target="_blank">
          <img src="../components/icons/Twitter.svg" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/okeibunor-emmanuel-a07473201/"
          target="_blank"
        >
          <img src="../components/icons/Linkedin.svg" alt="" />
        </a>
        <a
          href="https://web.facebook.com/okeibunor.emmanuel.96/"
          target="_blank"
        >
          <img src="../components/icons/Facebook.svg" alt="" />
        </a>
        <a href="https://github.com/trokeibunor" target="_blank">
          <img src="../components/icons/GitHub.svg" alt="" />
        </a>
      </div>
      <form action="#">
        <input type="text" v-model="contactForm.subject" name="subjec" placeholder="Subject" />
        <input type="email" v-model="contactForm.email" name="email" placeholder="Email Address" />
        <textarea rows="8" v-model="contactForm.message" name="message`" placeholder="Enter Message"></textarea>
        <div class="holder">
          <button @click="sendMail">
            <p>Shoot Mail</p>
            <img src="../components/icons/plane_up.svg" alt="" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  // import emailjs from 'emailjs-com';
  import{reactive} from 'vue';
  const contactForm = reactive({
    subject: '',
    email: '',
    message: ''
  })
    // const mailData = reactive({
    //   service_ID: "service_yvgjibc",
    //   template_ID: "template_ms0xoqp",
    //   userID: "YgFr_HC_CEEFSDd2a",
    // })
  function sendMail(){
      // emailjs.sendForm(
      //   mailData.service_ID,
      //   mailData.template_ID,
      //   e.target,
      //   mailData.userID,{
      //       subject: contactForm.subject,
      //       message: contactForm.message,
      //       reply_to: contactForm.email,
      //     }
      //   )
      //   .then(()=>{
      //       // Mail sent div
      //       // clear form
      //       contactForm.subject = "";
      //       contactForm.message = "";
      //       contactForm.email = ""
      //     },
      //     (error)=>{
      //     // use toast to show that email has not been sent
      //     console.log(error)
      //   }
      // )
    }
</script>

<style lang="scss" scoped>
#contacts {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0px auto;
  .title {
    display: flex;
    gap: 4px;
    img {
      max-width: 200px;
    }
  }
  .toaster {
    display: flex;
    justify-content: flex-end;
    h3 {
      width: 50%;
      font-size: 28px;
      font-weight: bold;
    }
  }
  .contact-holder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5rem 0px;
    .icon-stack {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    form {
      display: flex;
      flex-direction: column;
      //   justify-content: center;
      //   align-items: center;
      width: 50%;
      gap: 16px;
      padding: 2.5rem 0px;
      border-radius: 8px;
      input,
      textarea {
        width: 80%;
        border-radius: 8px;
        padding: 24px 0px 24px 16px;
        font-size: 18px;
        border: none;
        outline: none;
        color: #fff;
        margin: 0px auto;
      }
      .holder {
        width: 83%;
        display: flex;
        justify-content: flex-start;
        margin: 0px auto;
        button {
          display: flex;
          gap: 4px;
          justify-content: flex-end;
          align-items: center;
          background-color: #4415ff;
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 16px;
          outline: none;
          width: fit-content;
          height: fit-content;
          border: none;
          p {
            margin: 0px;
          }
          img {
            max-width: 24px;
            max-height: 24px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1024px){
  // tablet
  #contacts{
    .toaster{
      h3{
        width: 70%
      }
    }
    .contact-holder{
      form{
        width: 70%;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  #contacts{
    width: 90%;
    .title{
      img{
        max-width: 120px;
      }
    }
    .toaster{
      justify-content: center;
      h3{
        text-align: center;
        width: 100%;
        font-size: 18px;
      }
    }
    .contact-holder{
      flex-direction: column-reverse;
      gap: 16px;
      .icon-stack{
        flex-direction: row;
      }
      form{
        width: 100%;
        padding: 1.5rem 0px;
        input,textarea{
          width: 85%;
        }
      }
    }
  }
}
</style>
