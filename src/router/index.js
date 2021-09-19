import Vue from "vue";
import Router from "vue-router";
import Movie from "../views/Movie.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"


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

]
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes

})
export default router
