import { createRouter, createWebHistory } from "vue-router";

import DashboardHome from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    component: DashboardHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
