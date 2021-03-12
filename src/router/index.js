import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classificacao from '../views/Classificacao.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/classificacao',
    name: 'Classificacao',
    component: Classificacao
  }
]

const router = new VueRouter({
  routes
})

export default router
