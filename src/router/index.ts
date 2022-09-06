import AddTestimonialVue from "@/views/AddTestimonial.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddGig from "@/views/AddGig.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/addTestimonial",
      name: "addTestimonial",
      component: AddTestimonialVue
    },
    {
      path: "/addGig",
      name: "addGig",
      component: AddGig
    }
  ],
});

export default router;
