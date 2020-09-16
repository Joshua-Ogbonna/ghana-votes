import Vue from 'vue'
import VueRouter from 'vue-router'
import Update from '../views/Update.vue'
import Login from '@/views/Login.vue'
import Redirect from '@/views/Redirect.vue'
/* eslint-disable */
import { auth } from '../firebase.js'
import Dashboard from '@/views/Dashboard'

// Child Components
import Avenor from '@/components/Avenor'
import Awudome from '@/components/Awudome'
import Bubiashe from '@/components/Bubiashe'
import Bubui from '@/components/Bubui'
import Gonten from '@/components/Gonten'
import Kaneshie from '@/components/Kaneshie'
import Kanteian from '@/components/Kanteian'
import Mukose from '@/components/Mukose'

Vue.use(VueRouter)

const routes = [
  {
    path: '/update',
    name: 'Update',
    component: Update,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'avenor',
        name: 'avenor',
        component: Avenor
      },
      {
        path: 'awudome',
        name: 'awudome',
        component: Awudome
      },
      {
        path: 'bubiashe',
        name: 'bubiashe',
        component: Bubiashe
      },
      {
        path: 'bubui',
        name: 'bubui',
        component: Bubui
      },
      {
        path: 'gonten',
        name: 'gonten',
        component: Gonten
      },
      {
        path: 'kaneshie',
        name: 'kaneshie',
        component: Kaneshie
      },
      {
        path: 'kanteian',
        name: 'kanteian',
        component: Kanteian
      },
      {
        path: 'mukose',
        name: 'mukose',
        component: Mukose
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    name: 'redirect',
    component: Redirect
  },
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('login')
  } else {
    next()
  }
})

export default router
