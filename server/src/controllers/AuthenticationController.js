const {User} = require("../models")
module.exports = {
	register : async function(req,res) {
		console.log(req.body)
		let msg = `Request for ${req.body.email} found`
		console.log(msg)
		try {
			const user = await User.create(req.body) 
			res.send(user.toJSON())
		}catch(err) {
			// email already exits
			res.status(400).send( {
				error : "This email is alread in use"
			})
		}
	}
}