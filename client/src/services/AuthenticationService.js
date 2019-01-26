import Api from "@/services/Api"

export default {
	register (credentials) {
		return Api().post("register", credentials)
	},
	songSearch (credentials) {
		return Api().post("songSearch", credentials)
	}
}
