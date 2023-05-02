import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/login.vue'
import dashboard from '@/views/Dashboard.vue'
import EditarUsuario from '@/views/EditarUsuario.vue'

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

  },{
    path: '/usuarios/:id/editar',
    name: 'editar-usuario',
    component: EditarUsuario
  }
  


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
