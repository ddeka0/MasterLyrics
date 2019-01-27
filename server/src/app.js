const express = require("express")
const session = require("express-session")
const bodyParser = require("body-parser")
const ONE_HOUR = 1000 * 60 * 60
const {
	NODE_ENV = "development",
	SESS_NAME = "sid",
	SESS_SECRET = "kjkjs&^*%&%^(*&(*9u43jkjkl897sd",
	SESS_LIFETIME = ONE_HOUR
} = process.env
const IN_PROD = NODE_ENV === "production"
const app = express()
app.use(session({
	name: SESS_NAME,
	resave: true,
	saveUninitialized: true,
	secret: SESS_SECRET,
	cookie: {
		maxAge: SESS_LIFETIME,
		sameSite: true,
		secure: IN_PROD
	} 
}))
const cors = require("cors")
const morgan = require("morgan")
const {sequelize} = require("./models")
const config = require("./config/config")
const routes = require("./routes")

app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))


//app.use(express.bodyParser())
app.use(cors())

routes.setRoutes(app)

//sequelize.sequelize.sync

sequelize.sync(/* {force:true} */)
	.then(()=> {
		app.listen(config.port)
		// console.log(x)
		console.log(`Server started on port ${config.port}`)
	})
