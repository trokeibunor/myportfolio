import { defineStore } from "pinia";
import { db } from "@/db";
import {
  setDoc,
  doc,
  getDocs,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import emailjs from "emailjs-com";

export const useSiteState = defineStore({
  id: "siteState",
  state: () => ({
    isDarkMode: true,
    testimonials: [],
    gigs: [],
    isProcessing: false,
    emailSent: false,
    emailNotSent: false,
    mailData: {
      service_ID: "service_yvgjibc",
      template_ID: "template_ms0xoqp",
      userID: "YgFr_HC_CEEFSDd2a",
    },
  }),
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    async getTestimonials() {
      const querySnapshot = await getDocs(collection(db, "testimonial"));
      this.testimonials = [];
      querySnapshot.forEach((doc) => {
        const dataObject = doc.data();
        // Actions can mutate state in pinia
        // mutate projects
        this.testimonials.push({ ...dataObject });
      });
    },
    async addTestimonial({ name, email, position, workPlace, testimonial }) {
      this.isProcessing = true;
      try {
        await setDoc(doc(db, "testimonials", name), {
          Name: name,
          email: email,
          position: position,
          Workplace: workPlace,
          testimonial: testimonial,
          createdAt: serverTimestamp(),
        });
        this.isProcessing = false;
      } catch (error) {
        if (error) {
          console.log(error);
        }
      }
    },
    async addGigs({ name, link, gitLink, img, shortDesc }) {
      const storage = getStorage();
      const storageRef = ref(storage, name);
      const uploadArticle = await uploadBytes(storageRef, img);
      const downloadUrl = await getDownloadURL(uploadArticle.ref);
      try {
        await setDoc(doc(db, "gigs", name), {
          Name: name,
          Link: link,
          GitHubLink: gitLink,
          ImgLink: downloadUrl,
          shortDesc,
          createdAt: serverTimestamp(),
        });
      } catch (error) {
        if (error) {
          console.log(error);
        }
      }
    },
    async getGigs() {
      const querySnapshot = await getDocs(collection(db, "gigs"));
      this.gigs = [];
      querySnapshot.forEach((doc) => {
        const dataObject = doc.data();
        // Actions can mutate state in pinia
        // mutate projects
        this.gigs.push({ ...dataObject });
      });
    },
    async sendMail(subject, message, email, target) {
      this.isProcessing = true
      emailjs
        .sendForm(
          this.mailData.service_ID,
          this.mailData.template_ID,
          target,
          this.mailData.userID,
          {
            subject: subject,
            message: message,
            reply_to: email,
          }
        )
        .then(
          () => {
            // Mail sent div
            // Save mail to database
            this.isProcessing = false;
            this.emailSent = true
          },
          (error) => {
            // use toast to show that email has not been sent
            console.log(error);
            this.isProcessing = false;
            this.emailSent = true;
          }
        );
    },
  },
});
