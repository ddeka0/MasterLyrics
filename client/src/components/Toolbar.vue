<template>
<v-toolbar flat app dark color="primary">
  <router-link to="/">
  <v-toolbar-side-icon to="/">
    <v-img src="/static/song_icon.png" aspect-ratio="1 " contain @click="drclick"> 
    </v-img>
    
  </v-toolbar-side-icon>
  </router-link>
    <v-toolbar-title class="headline">
        <span class="font-weight-bold">
          MASTER</span>
        <span class="font-weight-medium">लिरिक्स</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div> 
    <v-btn
	v-if="!$store.state.isLoggedIn" 
	depressed color="success" to="/register"> Register</v-btn>

    <v-btn
	v-if="!$store.state.isLoggedIn" 
	depressed color="deep-orange" to="/login"> Login </v-btn>
    </div>
    <div>

		 <v-chip v-if="$store.state.isLoggedIn" label color="primary" text-color="white">
			 Welcome&nbsp;<b>{{email}}</b> !
    </v-chip>
	  <v-btn
	  v-if="$store.state.isLoggedIn" 
	  depressed color="success" @click="edit"> Edit</v-btn>
      <v-btn
	  v-if="$store.state.isLoggedIn" 
	  depressed color="error" @click="logout"> Logout</v-btn>
		<edit-add v-bind:dialog="dialog"></edit-add>
    </div>

</v-toolbar>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import EditAdd from './EditAdd'
  export default {
	name: 'toolbar',
	components: {
    EditAdd
	},
	props:{
    // about dialog box
    dialog:{
      type:Boolean,
      default: false
		},
	},
  data () {
    return {
      tb : '',
			session: false,
			email: this.$store.state.userEmail
    }
  },
  methods: {
    async drclick () {
        console.log("clicked")
	},
	async logout () {
		this.$store.dispatch("LOGIN", null)
		this.$store.state.isLoggedIn = false
		window.localStorage.clear()
		// send post request to server for clearing the session

		try {
			const response = await AuthenticationService.logout({
				dummy : ""
			})
			console.log("logout response form server : ",response.data)
			
			// this.$store.dispatch("login",this.email)
			this.$router.push('/login')
			this.error = ""
			this.alert = false
			this.alert2 = true
		}catch(err) {
			console.log(err.response)
			this.error = err.response.data.status /* err.response.data.error */
			this.alert2 = false
			this.alert = true
		}
	},
	edit () {
			this.dialog = false
      this.dialog = true
	}
    },
  }

</script>

<style scoped>

</style>