import Api from "@/services/Api"
export default {
	songSearch (credentials) {
		return Api().post("songSearch", credentials)
	},
	songSearchId (credentials) {
		return Api().post("songSearchId", credentials)
	}
}
