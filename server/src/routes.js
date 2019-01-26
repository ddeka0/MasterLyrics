const AuthenticationController = require("./controllers/AuthenticationController")

module.exports = {
	setRoutes : function(app) {
		console.log("Routes are setting up...")
		app.post("/register", 
		AuthenticationController.register),
		app.post("/songSearch", 
		AuthenticationController.songSearch)
	}
}