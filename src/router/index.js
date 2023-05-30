import { createRouter, createWebHistory } from "vue-router";
import FacutyView from "../views/FacultyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/faculty",
      name: "faculty",
			component: FacutyView
    },
  ],
});

export default router;
