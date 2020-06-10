import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import Billboard from "./views/BuyBillboard.vue";
import Stuffs from "./views/Stuffs.vue";
import GithubLogin from "./views/GithubLogin.vue";
import TwitterLogin from "./views/TwitterLogin.vue";

export default new VueRouter({
  mode: "hash",
  base: "",
  routes: [
   {
     path: "/",
     name: "home",
     component: Home
   },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login
    },
    {
      path: "/billboard",
      name: "billboard",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Billboard
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Stuffs
    },
    {
      path: "/login/github",
      name: "GithubLogin",
      component: GithubLogin
    },
    {
      path: "/login/twitter",
      name: "TwitterLogin",
      component: TwitterLogin
    }
  ]
});
