import Vue from "vue"
import Vuex from "vuex"
import VuexPersistence from "vuex-persist"

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
	storage: window.localStorage
})

export const store = new Vuex.Store({
	state: {
		isLoggedIn: false,
		userEmail:"none"
	},
	plugins:[vuexLocal.plugin],
	mutations: {
		LOGIN: (state,email) => {
			state.isLoggedIn = true
			state.userEmail = email
			localStorage.setItem("state",state.isLoggedIn.toString())
			localStorage.setItem("userEmail",email.toString())
		},
		LOGOUT: (state) => {
			state.isLoggedIn = false
			state.userEmail = "none"
			localStorage.setItem("state",state.isLoggedIn.toString())
			localStorage.setItem("userEmail","none")
		}
	},
	actions: {
		login: (context,email) => {
			context.commit("LOGIN",email)
		},
		logout: (context) => {
			context.commit("LOGOUT")
		}
	},
	getters: {
		getState: state => state.isLoggedIn,
		getEmail: state => state.userEmail
	}
})