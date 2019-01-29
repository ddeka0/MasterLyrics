<template>
<v-app>
  <toolbar></toolbar>
  <nav-drawer></nav-drawer>
  <!-- <about></about> -->
	<div id="app">
		<router-view></router-view>

	</div>
  
  <footer-comp></footer-comp>
  </v-app>
</template>

<script>

import Toolbar from './components/Toolbar'
import FooterComp from './components/Footer'
import navDrawer from './components/navDrawer'
import About from './components/About'

export default {
  name: 'App',
  components: {
    Toolbar,
    FooterComp,
    navDrawer,
    About
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
