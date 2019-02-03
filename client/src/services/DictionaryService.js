import Api from "@/services/Api"
export default {
	editMeaning (credentials) {
		return Api().post("editMeaning", credentials)
	}
}
