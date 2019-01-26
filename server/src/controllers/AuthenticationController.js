const {Song} = require("../models")
module.exports = {
	register : async function(req,res) {
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
