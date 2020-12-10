import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetails from '../views/MovieDetails.vue'
import NotFound from "../views/NotFound";
import Basket from "@/views/Basket";
import Filter from "@/views/Filter";
import AddReview from "@/views/AddReview";
import Orders from "@/views/Orders";
import AddMovie from "@/views/AddMovie";

Vue.use(VueRouter)
 
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/basket',
      name: 'Basket',
      component: Basket
    },
    {
      path: '/filter',
      name: 'Filter',
      component: Filter
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/addMovie',
      name: 'AddMovie',
      component: AddMovie
    },
  {
    path: '/movie/:movieId',
    component: MovieDetails
  },
    {
      path: '/movie/:movieId/addReview',
      name: 'AddReview',
      component: AddReview
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
