const express = require("express")

const app = express()

const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")

const {sequelize} = require("./models")
const config = require("./config/config")
const routes = require("./routes")

app.use(morgan("combined"))
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json())
//app.use(express.bodyParser())
app.use(cors())

routes.setRoutes(app)

//sequelize.sequelize.sync

sequelize.sync()
	.then(()=> {
		app.listen(config.port)
		console.log(`Server started on port ${config.port}`)
	})
