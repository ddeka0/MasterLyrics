<template>
<v-toolbar flat app dark color="primary">
  <router-link to="/">
  <v-toolbar-side-icon to="/">
    <v-img src="/static/song_icon.png" aspect-ratio="1 " contain @click="drclick"> 
    </v-img>
    
  </v-toolbar-side-icon>
  </router-link>
    <v-toolbar-title class="headline ">
        <span class="font-weight-bold">
          MASTER</span>
        <span>Lyrics</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn
	v-if = "!$store.state.isUserLoggedIn" 
	depressed color="success" to="/register"> Register</v-btn>

    <v-btn
	v-if = "!$store.state.isUserLoggedIn" 
	depressed color="deep-orange" to="/login"> Login </v-btn>

	<v-btn
	v-if = "$store.state.isUserLoggedIn" 
	depressed color="deep-orange" @click="logout"> LogOut </v-btn>
</v-toolbar>

</template>

<script>
  export default {
  name: 'toolbar',
  data () {
    return {
      tb : '',
    }
  },
  methods: {
    async drclick () {
        console.log("clicked")
	},
	logout () {
		this.$store.dispatch("setToken", null)
		this.$store.dispatch("setUser", null)
		this.$router.push({
			name:"search"
		})
	}
    }
  }
</script>

<style scoped>

</style>