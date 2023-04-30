import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/login.vue'
import dashboard from '@/views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard

  }
  


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
