import { createRouter, createWebHistory } from 'vue-router'

let auth = (to, from) => {
    if (!localStorage.getItem('token')) {
      return router.push({ name: 'login' });
    }
    return true
}

let guest = (to, from) => {
  if (localStorage.getItem('token')) {
    return router.push({ name: 'dashboard' });
  }
  return true
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('../views/HomeView.vue'),
      beforeEnter:guest,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
      beforeEnter: auth,
    },
    {
      path: '/mi-perfil',
      name: 'mi-perfil',
      component: () => import('../views/MyProfile.vue'),
      beforeEnter: auth,
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('../views/Users/index.vue'),
      beforeEnter: auth,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      beforeEnter: guest,
    }
  ]
})

export default router
