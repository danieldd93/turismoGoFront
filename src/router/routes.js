const routes = [
  {
    path: "/",
    redirect: "/homepage", // Redirige la ruta raíz a /login
  },
  {
    path: "/login",
    component: () => import("layouts/LoginLayout.vue"),
    children: [{ path: "", component: () => import("pages/Login.vue") }],
  },
  {
    path: "/products",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Products.vue") },
      {
        path: "/history/:userId",
        component: () => import("pages/UserHistory.vue"),
      },
      {
        path: "/activity/:activityId/users",
        component: () => import("pages/ActivityUsers.vue"),
      },
      {
        path: "/new-activity",
        component: () => import("pages/NewActivity.vue"),
      },
    ],
  },
  {
    path: "/homepage",
    component: () => import("layouts/IndexLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomePage.vue"), name: "home" },
      // Agrega otras rutas aquí
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
