const {User} = require("../models")
module.exports = {
	register : async function(req,res) {
		console.log(req.body)
		let msg = `Register request for ${req.body.email} found`
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
	},
	login : async function(req,res) {
		console.log(req.body)
		let msg = `Login request for ${req.body.email} found`
		console.log(msg)
		try {
			const {email,password} = req.body
			const user = await User.findOne({
				where: {
					email: email
				}
			})
			if(!user) {
				return res.status(403).send({
					error:"The login information was wrong"
				})
			}
			const isPasswordValid = password === user.password
			if(!isPasswordValid) {
				return res.status(403).send({
					error:"The login information was wrong"
				})
			}
			const userJson = user.toJSON()
			res.send({
				msg: "The use was found OK !!",
				user: userJson
			})
		}catch(err) {
			// email already exits
			res.status(500).send( {
				error : "This email is alread in use"
			})
		}
	},
	songSearch : async function(req,res) {
		console.log(Song)
		console.log(req.body)
		let msg = `Request for ${req.body.songName} found`
		console.log(msg)
		try {

			//const song = await Song.create(req.body) 
			const songs = await Song.findAll({
				where: {
					songName: req.body.songName
				}
			})
			// console.log(songs)
			var arr = []
			for (var id in songs) {
				console.log(songs[id].lyric)
				res.send(songs[id].lyric)
			}
			//User.run("INSERT INTO User (songName) Values (\"abs\")")
		}catch(err) {
			// email already exits
			console.log(err)
			res.status(400).send( {
				error : "error"
			})
		}
	}
}
