const AuthenticationController = require("./controllers/AuthenticationController")
const SongSearchController = require("./controllers/SongSearchController")
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy")
module.exports = {
	setRoutes : function(app) {
		console.log("Routes are setting up...\n\n")

		app.post("/register",
		AuthenticationControllerPolicy.register,
		AuthenticationController.register),
		
		app.post("/login", 
		AuthenticationController.login)

		app.post("/songSearch", 
		SongSearchController.songSearch)

		app.post("/songSearchId", 
		SongSearchController.songSearchId)

	}
}