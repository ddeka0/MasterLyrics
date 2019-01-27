const {Song} = require("../models")
module.exports = {
	// this module will perform the required functionality for 
	// song search for do manipulation on song lyric
	songSearch : async function(req,res) {
		console.log(Song)
		console.log(req.body)
		let msg = `Request for ${req.body.songName} found`
		console.log(msg)
		try {

			//const song = await Song.create(req.body) 
			const songs = await Song.findAll({
				where: {
					songNameEng: req.body.songName
				}
			})
			console.log(songs)
			var arr = []
			for (var i in songs) {
			var results = songs[i].Lyric.match(/("[^"]+"|[^"\s]+)/g)
			var newRes ={
				id: songs[i].id,
				lyrics: results
			}
			console.log(newRes)
			res.send(newRes)
			}
			// var arr = []
			// for (var id in songs) {
			// 	console.log(songs[id].lyric)
			// 	res.send(songs[id].lyric)
			// }

			
			//User.run("INSERT INTO User (songName) Values (\"abs\")")
		}catch(err) {
			// email already exits
			console.log(err)
			res.status(400).send( {
				error : "error"
			})
		}
	},
	songSearchId : async function(req,res) {
		console.log(Song)
		console.log(req.body)
		let msg = `Request for ${req.body.id} found`
		console.log(msg)
		try {

			//const song = await Song.create(req.body) 
			const songs = await Song.findAll({
				where: {
					id: req.body.id
				}
			})
			console.log(songs)
			var arr = []
			for (var i in songs) {
			var results = songs[i].Lyric.match(/("[^"]+"|[^"\s]+)/g)
			var newRes ={
				id: songs[i].id,
				lyric: results,
				tuple: songs[i]
			}
			console.log(newRes)
			res.send(newRes)
			}
			// var arr = []
			// for (var id in songs) {
			// 	console.log(songs[id].lyric)
			// 	res.send(songs[id].lyric)
			// }

			
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