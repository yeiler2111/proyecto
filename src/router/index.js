import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/login.vue";
import dashboard from "@/views/Dashboard.vue";
import EditarUsuario from "@/views/EditarUsuario.vue";



const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/superadmin",
    name: "superadmin",
    component: () => import("../views/viewsSuperAdmin/Home.vue"),
    children: [
      {
        path: "home",
        name: "home_super_admin",
        component: () => import("../views/viewsSuperAdmin/Specific.vue"),
      },
      {
        path: "Other",
        name: "Other",
        component: () => import("../views/viewsSuperAdmin/Other.vue"),
      }
    ]
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/viewsAdmin/Home.vue"),
    children: [
      {
        path: "home_admin",
        name: "home_admin",
        component: () => import("../views/viewsAdmin/Specific.vue"),
      }
    ]
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/viewsUser/Home.vue"),
    children: [
      {
        path: "home",
        name: "home_user",
        component: () => import("../components/Dummy.vue"),
      }
    ]
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard,
  },
  {
    path: "/usuarios/:id/:rol",
    name: "editar-usuario",
    component: EditarUsuario,
  },
  { //si la ruta no existe
    path: '/:catchAll(.*)', 
    component: () => import("../views/NotFoundView.vue"),
    name: 'NotFound'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  
 
});

export default router;
