import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from "../views/DashboardView.vue";
import FacultyView from "../views/FacultyView.vue";
import LLOView from "../views/LloView.vue";
// import CreateFacultyView from "../views/CreateFacultyView.vue";
// import ReadFacultyView from "../views/ReadFacultyView.vue";
// import UpdateFacultyView from "../views/UpdateFacultyView.vue";
// import DeleteFacultyView from "../views/DeleteFacultyView.vue";
// import LLOView from "../views/LLOView.vue";
// import CreateLLOView from "../views/CreateLLOView.vue";
// import ReadLLOView from "../views/ReadLLOView.vue";
// import UpdateLLOView from "../views/UpdateLLOyView.vue";
// import DeleteLLOView from "../views/DeleteLLOView.vue";
import DetailAssignmentView from "../views/DetailAssignmentView.vue";


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
    // {
    //   path: "/create-faculty",
    //   name: "create faculty",
		// 	component: CreateFacultyView
    // },
    // {
    //   path: "/read-faculty",
    //   name: "read faculty",
		// 	component: ReadFacultyView
    // },
    // {
    //   path: "/update-faculty",
    //   name: "update faculty",
		// 	component: UpdateFacultyView
    // },
    // {
    //   path: "/delete-faculty",
    //   name: "delete faculty",
		// 	component: DeleteFacultyView
    // },
<<<<<<< HEAD
    {
      path: "/llo",
      name: "llo",
			component: LLOView
    },
=======
    // {
    //   path: "/llo",
    //   name: "llo",
		// 	component: LLOView
    // },
>>>>>>> ff0d419ff7e828e89b1134ce75f448ce6dff6956
    // {
    //   path: "/create-llo",
    //   name: "create llo",
		// 	component: CreateLLOView
    // },
    // {
    //   path: "/read-llo",
    //   name: "read llo",
		// 	component: ReadLLOView
    // },
    // {
    //   path: "/update-llo",
    //   name: "update llo",
		// 	component: UpdateLLOView
    // },
    // {
    //   path: "/delete-llo",
    //   name: "delete llo",
		// 	component: DeleteLLOView
    // },
<<<<<<< HEAD
    {
      path: '/show-assignment',
      name: 'detail assignment',
      component: DetailAssignmentView
    },
=======
    // {
    //   path: '/show-assignment',
    //   name: 'detail assignment',
    //   component: DetailAssignmentView
    // },
>>>>>>> ff0d419ff7e828e89b1134ce75f448ce6dff6956
  ]
})

export default router;
