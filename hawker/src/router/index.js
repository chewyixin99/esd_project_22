import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/loginhawker',
    name: 'LoginHawker',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginHawker.vue')
  },
  {
    path: '/hawkers',
    name: 'Hawkers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Hawkers.vue')
  },
  {
    path: '/hawkerstall',
    name: 'HawkerStall',
    component: () => import(/* webpackChunkName: "about" */ '../views/HawkerStall.vue')
  },
  {
    path: '/topup',
    name: 'TopUp',
    component: () => import(/* webpackChunkName: "about" */ '../views/TopUp.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "about" */ '../views/Account.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "about" */ '../views/Order.vue')
  },
  {
    path: '/hawkeractivity',
    name: 'HawkerActivity',
    component: () => import(/* webpackChunkName: "about" */ '../views/HawkerActivity.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
