import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
 
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
    {
      path: '/basket',
      name: 'Basket',
      component: () => import('../views/Basket')
    },
    {
      path: '/filter',
      name: 'Filter',
      component: () => import('../views/Filter')
    },
    {
      path: '/orders',
      name: 'Orders',
      component: () => import('../views/Orders')
    },
    {
      path: '/addMovie',
      name: 'AddMovie',
      component: () => import('../views/AddMovie')
    },
  {
    path: '/movie/:movieId',
    component: () => import('../views/MovieDetails')
  },
    {
      path: '/movie/:movieId/addReview',
      name: 'AddReview',
      component: () => import('../views/AddReview')
    },
    {
      path: "/:catchAll(.*)",
      component: () => import('../views/NotFound'),
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
