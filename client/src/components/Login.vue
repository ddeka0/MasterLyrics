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
					<div class="error" v-html="error"></div>
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
			rules: {
			required: value => !!value || 'Required.',
			min: v => v.length >= 8 || 'Min 8 characters',
			emailMatch: () => ('The email and password you entered don\'t match')
			}
			}
	},
	methods: {
		async login () {
			try {
				const response = await AuthenticationService.login({
					email: this.email,
					password: this.password
				})
				console.log(response.data)
				// redirect to search page
				// hide login tab and display user name
				this.error = ""
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
	color: white
}
</style>
