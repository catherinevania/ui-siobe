import { createRouter, createWebHistory } from 'vue-router'
import FacultyView from "../views/FacultyView.vue";
import FacutyView from "../views/FacultyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: "/faculty",
      name: "faculty",
			component: FacultyView
    },
    {
      path: "/create-faculty",
      name: "faculty",
			component: CreateFacultyView
    },
    {
      path: "/read-faculty",
      name: "faculty",
			component: ReadFacultyView
    },
    {
      path: "/update-faculty",
      name: "faculty",
			component: UpdateFacultyView
    },
    {
      path: "/deletefaculty",
      name: "faculty",
			component: DeleteFacultyView
    },
    {
      path: "/faculty",
      name: "faculty",
			component: FacultyView
    },
    {
      path: "/create-llo",
      name: "llo",
			component: CreateLLOView
    },
    {
      path: "/read-llo",
      name: "llo",
			component: ReadLLOView
    },
    {
      path: "/update-llo",
      name: "llo",
			component: UpdateLLOView
    },
    {
      path: "/delete-llo",
      name: "llo",
			component: DeleteLLOView
    },
  ]
})

export default router;
