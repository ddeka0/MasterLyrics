import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import Login from '@/components/Login'
import Register from '@/components/Register'
import LyricPage from '@/components/LyricPage'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

Vue.config.productionTip = false

Vue.use(Router)

// eslint-disable-next-line
new Vue({
  el: '#vid',
  template: '<LyricPage/>',
  components: { LyricPage }
})

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
  path: "/LyricPage/:id",
  name: "LyricPage",
  component: LyricPage
},
  ]
})
