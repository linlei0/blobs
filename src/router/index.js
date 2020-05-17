import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import { getToken } from '@/utils/auth'

Vue.use(VueRouter)

const routes = [

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const toLogin = () => {
  window.location.href = '/'
}

router.beforeEach((to, from, next) => {
  if (getToken()) {
    next()
  } else {
    toLogin()
  }
  // next()
})

export default router
