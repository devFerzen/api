import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Globales/Home.vue'

Vue.use(VueRouter)

  const routes = [
    /*
      Home Route extrae de la url un query, si esq existe (pendiente)
      y también se le puede pasar al router/vista un prop, si se debe
      de activar el modal de inicio de sesion.
    */
  {
    path: '/',
    name: 'home-route',
    component: Home,
    meta: {
      libre: true
    }
  }, //Página principal
  {
    path: '/buscador',
    name: 'buscador-route',
    component: () => import(/* webpackChunkName: "anuncio" */ '../views/Globales/Buscador.vue'),
    meta: {
      libre: true
    }
  }, //Buscador principal
  {
    path: '/home',
    name: 'werker-home-route',
    component: () => import(/* webpackChunkName: "anuncio" */ '../views/Globales/WerkerHome.vue'),
    meta: {
      libre: true
    }
  }, //Home usuario werk
  {
    path: '/freelance/:id',
    name: 'freelanceWerk-route',
    props: true, //Así el $route.params.id or this.$route.params.id lo pasamos al props ['id']
    component: () => import(/* webpackChunkName: "anuncio" */ '../views/Freelancer/Freelance.vue'),
    meta: {
      libre: true
    }
  },
  {
    path: '/freelance/:id/edit',
    name: 'freelanceWerk-edit-route',
    props: true,
    component: () => import(/* webpackChunkName: "anuncio" */ '../views/Freelancer/FreelanceEdit.vue'),
    meta: {
      libre: true,
    }
  },
  {
    path: '/anuncio/:id',
    name: 'anuncioWerk-route',
    props: true,
    component: () => import(/* webpackChunkName: "anuncio" */ '../views/Freelancer/Anuncio.vue'),
    meta: {
      libre: true
    }
  },
  {
    path: '/anuncio/:id/edit',
    name: 'anuncioWerk-edit-route',
    props: true,
    component: () => import(/* webpackChunkName: "anuncio" */ '../views/Freelancer/AnuncioEdit.vue'),
    meta: {
      libre: true
    }
  },
  {
    path: '/portafolio/:id',
    name: 'portafolioWerk-route',
    props: true,
    component: () => import(/* webpackChunkName: "portafolio" */ '../views/Freelancer/Portafolio.vue'),
    meta: {
      libre: true
    }
  },
  { //Falta
    path: '/portafolio/:id/edit',
    name: 'portafolioWerk-edit-route',
    props: true,
    component: () => import(/* webpackChunkName: "portafolio" */ '../views/Freelancer/PortafolioEdit.vue'),
    meta: {
      libre: true
    }
  },
  { //Falta
    path: '/contratante/:id/edit',
    name: 'contratanteWerk-edit-route',
    props: true,
    component: () => import(/* webpackChunkName: "anuncio" */ '../views/Contratante/ContratanteEdit.vue'),
    meta: {
      libre: true,
    }
  },
  { //Falta
    path: '/vacante/:id',
    name: 'vacanteWerk-route',
    props: true,
    component: () => import(/* webpackChunkName: "anuncio" */ '../views/Contratante/Vacante.vue'),
    meta: {
      libre: true
    }
  },
  {
    path: '/vacante/:id/edit',
    name: 'vacanteWerk-edit-route',
    props: true,
    component: () => import(/* webpackChunkName: "anuncio" */ '../views/Contratante/VacanteEdit.vue'),
    meta: {
      libre: true
    }
  },
  { //falta
    path: '/contactanos',
    name: 'contactanos-route',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Globales/Contactanos.vue'),
    meta: {
      libre: true
    }
  },
  {
    path: '*',
    name: 'E404',
    component: () => import(/* webpackChunkName: "anuncio" */ '../views/Globales/E404.vue'),
    meta: {
      libre: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//Agregar el chequeo de rutas
router.beforeEach((to,from,next) => {
  if(to.matched.some(record => record.meta.libre)) {
    next();
  } else if(store.state.Autenticacion.user && store.state.Autenticacion.user.rol == 'Freelancer'){
    if(to.matched.some(record => record.meta.freelancer)){
      next();
    }
  } else if(store.state.Autenticacion.user && store.state.Autenticacion.user.rol == 'Contratante'){
    if(to.matched.some(record => record.meta.contratante)){
      next();
    }
  } else {
    next({
      name: 'home-route',
      props: true,
      params: { needsLogin: true }, //pasar como query y no como parametro
      redirect: { path: to.path } //testear si es así
    });
  }
});

export default router
