import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import Login from '@/components/Login'
import Register from '@/components/Register'

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
	
  ]
})
