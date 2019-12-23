export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home"),
    meta: {
      title: "Home",
      description: "Home description"
    }
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About")
  },
  {
    path: "/api",
    name: "api",
    component: () => import("@/views/Api"),
    meta: {
      title: "Api",
      description: "Api test page"
    }
  }
];
