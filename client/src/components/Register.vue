<template>
<v-container grid-list-xl text-xs-center>
	<v-layout row wrap>
		<v-flex xs6 offset-xs3>
			<div class="white elevation-2">
				<v-toolbar flat dense class="cyan" dark>
					<v-toolbar-title>Register</v-toolbar-title>
				</v-toolbar>
				<div class="pl-4 pr-4 pt-2 pb-2">
						<input 
						type="email"
						name="email"
						v-model="email"
						placeholder="emial">
					<br>
					<input 
						type="password"
						name="password"
						v-model="password"
						placeholder="password">
					<br>
					<div class="error" v-html="error"></div>
					<v-btn class="cyan" @click="register">Register</v-btn>
				</div>
			</div>
		</v-flex>
	</v-layout>
</v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
	data () {
		return {
			email:"",
			password:"",
			error: null
		}
	},
	methods: {
		async register () {
			try {
				const response = await AuthenticationService.register({
					email: this.email,
					password: this.password
				})
				console.log(response.data)
			}catch(err) {
				this.error = err.response.data.error
			}
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
	color: red
}
</style>
