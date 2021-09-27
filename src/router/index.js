import Vue from "vue";
import Router from "vue-router";
import Movie from "../views/Movie.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Search from "../views/Search.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import MovieDetail from "../views/MovieDetail.vue";
import WatchMovie from "../views/WatchMovie.vue";
import MovieCMS from "../views/MovieCMS.vue";
import VueCookies from "vue-cookies";

Vue.use(Router);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (!VueCookies.get("Account")) next();
      else if (VueCookies.get("Account").role == "guest") {
        next({ name: "Movie" });
      } else {
        next({ name: "MovieCMS" });
      }
    },
  },
  {
    path: "/movie",
    name: "Movie",
    component: Movie,
    beforeEnter: (to, from, next) => {
      if (VueCookies.get("Account").role == "guest") next();
      else {
        next(false);
      }
    },
  },
  {
    path: "/admin",
    name: "MovieCMS",
    component: MovieCMS,
    beforeEnter: (to, from, next) => {
      if (VueCookies.get("Account").role == "admin") next();
      else {
        next(false);
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (VueCookies.isKey("Account") == false) next();
      else {
        next({ name: "Movie" });
      }
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: (to, from, next) => {
      if (VueCookies.isKey("Account") == false) next();
      else {
        next(false);
      }
    },
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    beforeEnter: (to, from, next) => {
      if (VueCookies.get("Account").role == "guest") next();
      else if (VueCookies.ge("Account").role == "admin") {
        next(false);
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    beforeEnter: (to, from, next) => {
      if (VueCookies.get("Account").role == "guest") next();
      else if (VueCookies.ge("Account").role == "admin") {
        next(false);
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    beforeEnter: (to, from, next) => {
      if (VueCookies.get("Account").role == "guest") next();
      else if (VueCookies.ge("Account").role == "admin") {
        next(false);
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/moviedetail/:id",
    name: "MovieDetail",
    component: MovieDetail,
    props: true,
    beforeEnter: (to, from, next) => {
      if (VueCookies.get("Account").role == "guest") next();
      else if (VueCookies.ge("Account").role == "admin") {
        next(false);
      } else {
        next({ name: "Login" });
      }
    },
  },
  {
    path: "/watchmovie/:id",
    name: "WatchMovie",
    component: WatchMovie,
    props: true,
    beforeEnter: (to, from, next) => {
      if (VueCookies.get("Account").role == "guest") next();
      else if (VueCookies.ge("Account").role == "admin") {
        next(false);
      } else {
        next({ name: "Login" });
      }
    },
  },
];
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes,
});

// router.beforeEach((to, next) => {
//   if (to.name !== "Login") next({ name: "Login" });
//   else next();
// });
export default router;
