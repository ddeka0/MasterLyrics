import Api from "@/services/Api"
export default {
	songSearch (credentials) {
		return Api().post("songSearch", credentials)
	},
	songSearchId (credentials) {
		return Api().post("songSearchId", credentials)
	},
	AZlistSearch (credentials) {
		return Api().post("AZlistSearch", credentials)
	}
}
