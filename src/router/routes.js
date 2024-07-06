const routes = [
  {
    path: "/",
    redirect: "/homepage", // Redirige la ruta raíz a /login
  },
  {
    path: "/login",
    component: () => import("layouts/LoginLayout.vue"),
    children: [{ path: "", component: () => import("pages/Login2.vue") }],
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
    path: "/changePass",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ChangePass.vue") }],
  },
  {
    path: "/welcome",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Welcome.vue") }],
  },

  {
    path: "/adduser",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/NewUser.vue") }],
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
    path: "/publicarActividades",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("components/PublishActivity.vue") },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
