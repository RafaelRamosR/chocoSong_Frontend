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
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      beforeEnter: guest,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue'),
      beforeEnter: guest,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/Nosotros.vue'),
      beforeEnter: guest,
    },
//----------------------------------------LOGINS--------------------------------------------------
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
    
//----------------------------------------------------Roles-------------------------------------
    {
      path: '/roles',
      name: 'roles',
      component: () => import('../views/Roles/index.vue'),
      beforeEnter: auth,
    },
    {
      path: '/editar-rol/:id',
      name: 'editar-rol',
      component: () => import('../views/Roles/edit.vue'),
      beforeEnter: auth,
    },
    {
      path: '/ver-rol/:id',
      name: 'ver-rol',
      component: () => import('../views/Roles/show.vue'),
      beforeEnter: auth,
    },
    {
      path: '/crear-rol',
      name: 'roles.create',
      component: () => import('../views/Roles/create.vue'),
      beforeEnter: auth,
    },
  //---------------------------------------------Users-----------------------------------------
    {
      path: '/usuarios',
      name: 'users.index',
      component: () => import('../views/Users/index.vue'),
      beforeEnter: auth,
    },
    {
      path: '/usuarios/crear',
      name: 'users.create',
      component: () => import('../views/Users/create.vue'),
      beforeEnter: auth,
    },
    {
      path: '/usuarios/:id/editar',
      name: 'users.edit',
      component: () => import('../views/Users/edit.vue'),
      beforeEnter: auth,
    },
    {
      path: '/usuarios/:id',
      name: 'users.show',
      component: () => import('../views/Users/show.vue'),
      beforeEnter: auth,
    },

  ]
})

export default router
