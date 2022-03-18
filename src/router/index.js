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
      component: () => import('../views/Login.vue'),
      // component: ()=> import('../views/HomeView.vue'),
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
      name: 'roles.index',
      component: () => import('../views/Roles/index.vue'),
      beforeEnter: auth,
    },
    {
      path: '/roles/:id/edit',
      name: 'roles.edit',
      component: () => import('../views/Roles/edit.vue'),
      beforeEnter: auth,
    },
    {
      path: '/roles/:id/ver',
      name: 'roles.show',
      component: () => import('../views/Roles/show.vue'),
      beforeEnter: auth,
    },
    {
      path: '/roles/crear',
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
      path: '/usuarios/:id/ver',
      name: 'users.show',
      component: () => import('../views/Users/show.vue'),
      beforeEnter: auth,
    },
    {
      path: '/mis-publicaciones',
      name: 'users.publications',
      component: () => import('../views/Users/Publications.vue'),
      beforeEnter: auth,
    },

//----------------------------------------------------Categories-------------------------------------
    {
      path: '/categorias',
      name: 'categories.index',
      component: () => import('../views/Categories/index.vue'),
      beforeEnter: auth,
    },
    {
      path: '/categoria/:id/editar',
      name: 'categories.edit',
      component: () => import('../views/Categories/edit.vue'),
      beforeEnter: auth,
    },
    {
      path: '/categoria/:id/ver',
      name: 'categories.show',
      component: () => import('../views/Categories/show.vue'),
      beforeEnter: auth,
    },
    {
      path: '/categorias/crear',
      name: 'categories.create',
      component: () => import('../views/Categories/create.vue'),
      beforeEnter: auth,
    },

//----------------------------------------------------Categories-------------------------------------
    {
      path: '/departamentos',
      name: 'departamentos.index',
      component: () => import('../views/Departamentos/index.vue'),
      beforeEnter: auth,
    },
    {
      path: '/departamento/:id/editar',
      name: 'departamentos.edit',
      component: () => import('../views/Departamentos/edit.vue'),
      beforeEnter: auth,
    },
    {
      path: '/departamento/:id/ver',
      name: 'departamentos.show',
      component: () => import('../views/Departamentos/show.vue'),
      beforeEnter: auth,
    },
    {
      path: '/departamentos/crear',
      name: 'departamentos.create',
      component: () => import('../views/Departamentos/create.vue'),
      beforeEnter: auth,
    },

//----------------------------------------------------Categories-------------------------------------
    {
      path: '/permisos',
      name: 'permissions.index',
      component: () => import('../views/Permissions/index.vue'),
      beforeEnter: auth,
    },
    {
      path: '/permiso/:id/editar',
      name: 'permissions.edit',
      component: () => import('../views/Permissions/edit.vue'),
      beforeEnter: auth,
    },
    {
      path: '/permiso/:id/ver',
      name: 'permissions.show',
      component: () => import('../views/Permissions/show.vue'),
      beforeEnter: auth,
    },
    {
      path: '/permisos/crear',
      name: 'permissions.create',
      component: () => import('../views/Permissions/create.vue'),
      beforeEnter: auth,
    },
    
//----------------------------------------------------Categories-------------------------------------
    {
      path: '/logs',
      name: 'logs.index',
      component: () => import('../views/Logs/index.vue'),
      beforeEnter: auth,
    },
  
  //---------------------------------------------My publications-----------------------------------------
  {
    path: '/publicaciones/crear',
    name: 'publications.create',
    component: () => import('../views/Publications/create.vue'),
    beforeEnter: auth,
  },

  ]
})

export default router
