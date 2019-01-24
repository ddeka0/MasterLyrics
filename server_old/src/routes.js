const AuthenticationController = require("./controllers/AuthenticationController")
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy")

module.exports = {
	setRoutes : function(app) {
		console.log("Routes are setting up...")
		app.post("/register", 
		//AuthenticationControllerPolicy.register,
		AuthenticationController.register)
	}
}