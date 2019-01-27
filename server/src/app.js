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
		sameSite: false,
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


// app.use(express.bodyParser())

routes.setRoutes(app)

const corsOptions = {
	origin: "http://localhost:8080",
	credentials: true
}



app.use(function(req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
	
    // Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
	
    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
	
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
	
    // Pass to next layer of middleware
    next();
});
//sequelize.sequelize.sync
app.use(cors(corsOptions))

sequelize.sync(/* {force:true} */)
	.then(()=> {
		app.listen(config.port)
		// console.log(x)
		console.log(`Server started on port ${config.port}`)
	})
