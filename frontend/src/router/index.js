import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    component: () => import('../views/user/Home.user.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/',
        name: 'UserStatu',
        component: () => import('../views/user/Status.user.vue'),

      },
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting

    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "error" */ '../views/NotFound.vue'),

  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue'),
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to,from)  
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    Nprogress.start();
    const token = localStorage.getItem('token');
    if (token !== null) {
      store.dispatch("doLogin", token);
      if (store.state.auth ) {
        next();
      } else {
        next({ name: "Login" });
      }
    }
    else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
})

export default router
