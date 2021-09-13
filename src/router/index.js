import Vue from 'vue'
import Router from 'vue-router'
import Movie from '../views/Movie.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movie',
      component: Movie
    }
  ]
})