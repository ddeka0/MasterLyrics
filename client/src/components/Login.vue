<template>
<v-container grid-list-xl text-xs-center>
	<v-layout row wrap>
		<v-flex flat xs6 offset-xs3>
			<div class="white elevation-2">
				<v-toolbar flat dense class="deep-orange lighten-2" dark>
					<v-toolbar-title>Login</v-toolbar-title>
				</v-toolbar>
				 <v-form>
					<v-container>
						<v-flex >
							<v-text-field
								v-model="email"
								label="Email"
								required
								full-width background-color="deep-orange lighten-5"
							></v-text-field>
                            <v-text-field
								v-model="password"
								:append-icon="show2 ? 'visibility_off' : 'visibility'"
								:rules="[rules.required, rules.min]"
								:type="show2 ? 'text' : 'password'"
								name="input-10-2"
								label="Password"
								hint="At least 8 characters"
								value="wqfasds"
								class="input-group--focused"
								@click:append="show2 = !show2"
								
								required
								full-width background-color="deep-orange lighten-5"
							></v-text-field>
						</v-flex>
						<br>
					<!-- <div class="information" v-html="error"></div> -->

					<v-alert
						v-model="alert"
						dismissible
						type="error"
						transition="scale-transition"
						>
						{{error}}
						</v-alert>
						<v-alert
						v-model="alert2"
						dismissible
						type="success"
						transition="scale-transition"
						to="/"
						>
						You are successfully Logged in!
						</v-alert>

					<v-snackbar
						v-model="alert2"
						top
						color="success"
						:multi-line="mode === 'multi-line'"
						:timeout="timeout"
						:vertical="mode === 'vertical'"
						>
						Login Successful
						<v-btn
							dark
							flat
							@click="alert2 = false"
						>
							Close
						</v-btn>
						</v-snackbar>

					<v-btn depressed dark class="deep-orange" @click="login">Login</v-btn>
				</v-container>
			</v-form>
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
			error: null,
			show2: false,
			alert: false,	// for error alert
			alert2: false,	// for success alert
			rules: {
			required: value => !!value || 'Required.',
			min: v => v.length >= 8 || 'Min 8 characters',
			emailMatch: () => ('The email and password you entered don\'t match')
			}
			}
	},
	beforeCreate: function () {
		const exits = localStorage.getItem("state") 
		if(exits) {
			console.log(localStorage.getItem("state"))
			console.log(localStorage.getItem("userEmail"))
			this.$router.push("/")
		}
	},
	methods: {
		async login () {
			try {
				const response = await AuthenticationService.login({
					email: this.email,
					password: this.password
				})
				console.log("login response form server : ",response.data)
				// redirect to search page
				// hide login tab and display user name
				this.$store.dispatch("login",this.email)
				this.$router.push('/')
				this.error = ""
				this.alert = false
				this.alert2 = true
			}catch(err) {
				console.log(err.response)
				this.error = err.response.data.error /* err.response.data.error */
				this.alert2 = false
				this.alert = true
			}
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.information {
	color: blue
}
</style>
