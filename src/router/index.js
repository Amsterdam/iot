import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Complaints from '@/components/Home/Complaints'
import InfoRequest from '@/components/Home/InfoRequest'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.ROUTER_BASE,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/complaints',
      name: 'Complaints',
      component: Complaints
    },
    {
      path: '/inforequest/:id',
      name: 'InfoRequest',
      component: InfoRequest
    }
  ]
})
