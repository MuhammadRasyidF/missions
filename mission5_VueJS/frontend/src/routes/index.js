import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "List",
      component: () => import("../components/MhsList.vue"),
    },
    {
      path: "/create",
      name: "Create",
      component: () => import("../components/AddMhs.vue"),
    },
    {
      path: "/edit/:id",
      name: "Edit",
      component: () => import("../components/EditMhs.vue"),
    },
  ],
});

export default router;
