import Api from "@/services/Api"

export default {
	register (credentials) {
		return Api().post("register", credentials)
	},
	login (credentials) {
		return Api().post("login", credentials)
	},
	songSearch (credentials) {
		return Api().post("songSearch", credentials)
	}
}
