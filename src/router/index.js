import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import FacutyView from "../views/FacultyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/faculty",
      name: "faculty",
			component: FacutyView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/dashboard',
      name: 'dashboard',
      component:DashboardView
    }
  ]
})

export default router;
