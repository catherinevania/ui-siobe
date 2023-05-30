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
      name: "create faculty",
			component: CreateFacultyView
    },
    {
      path: "/read-faculty",
      name: "read faculty",
			component: ReadFacultyView
    },
    {
      path: "/update-faculty",
      name: "update faculty",
			component: UpdateFacultyView
    },
    {
      path: "/delete-faculty",
      name: "delete faculty",
			component: DeleteFacultyView
    },
    {
      path: "/llo",
      name: "llo",
			component: FacultyView
    },
    {
      path: "/create-llo",
      name: "create llo",
			component: CreateLLOView
    },
    {
      path: "/read-llo",
      name: "read llo",
			component: ReadLLOView
    },
    {
      path: "/update-llo",
      name: "update llo",
			component: UpdateLLOView
    },
    {
      path: "/delete-llo",
      name: "delete llo",
			component: DeleteLLOView
    },
    {
      path: '/show-assignment',
      name: 'detail assignment',
      component: DetailAssignmentView
    },
  ]
})

export default router;
