import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
