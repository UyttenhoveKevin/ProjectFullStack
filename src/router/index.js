import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetails from '../views/MovieDetails.vue'
import NotFound from "../views/NotFound";
import Basket from "@/views/Basket";

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
    path: '/movie/:movieId',
    component: MovieDetails
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
