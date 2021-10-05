import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import Lojista from '../views/Lojista.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  },
  {
    path: '/lojista',
    name: 'Lojista',
    component: Lojista
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
