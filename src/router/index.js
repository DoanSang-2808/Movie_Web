import Vue from "vue";
import Router from "vue-router";
import Movie from "../views/Movie.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Search from '../views/Search.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue'
import MovieDetail from '../views/MovieDetail.vue'


Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'Movie',
    component: Movie,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/moviedetail',
    name: 'MovieDetail',
    component: MovieDetail,
  },

]
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes

})
export default router
