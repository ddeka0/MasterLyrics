<template>
<v-container grid-list-xl text-xs-center>
	<v-layout row wrap>
		<v-flex flat xs6 offset-xs3>
			<div class="white elevation-2">
				<v-toolbar flat dense class="success lighten-1" dark>
					<v-toolbar-title>Register</v-toolbar-title>
				</v-toolbar>
				 <v-form>
					<v-container>
						<v-flex >
							<v-text-field
								v-model="email"
								label="Email"
								required
								full-width background-color="success lighten-5"
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
								full-width background-color="success lighten-5"
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
						>
						You are successfully Registered!
						</v-alert>
					
					<v-btn depressed dark class="success" @click="register">Register</v-btn>
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
	methods: {
		async register () {
			try {
				const response = await AuthenticationService.register({
					email: this.email,
					password: this.password
				})
				console.log(response.data)
				this.error = ""
				this.alert = false
				this.alert2 = true
			}catch(err) {
				this.error = err.response.data.error
				this.error = this.error.replace(/<br>/g, " \n ")
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
