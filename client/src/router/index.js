import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import Login from '@/components/Login'
import Register from '@/components/Register'
import LyricPage from '@/components/LyricPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "search",
      component: Search
  },
  {
    path: "/login",
    name: "login",
    component: Login
},
{
  path: "/register",
  name: "register",
  component: Register
},
{
  path: "/LyricPage",
  name: "LyricPage",
  component: LyricPage
},
  ]
})
