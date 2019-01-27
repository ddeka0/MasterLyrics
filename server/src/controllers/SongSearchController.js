const {Song} = require("../models")
const {Dict} = require("../models")
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
			// console.log(songs)
			
				
				// var arr = []
				// for (var id in songs) {
				// 	console.log(songs[id].lyric)
				// 	res.send(songs[id].lyric)
				// }
			// console.log(songs)
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
			
			if (songs.length != 0){
				
				var arr = []
				for (var id in songs) {
				var results = songs[id].Lyric.match(/("[^"]+"|[^"\s]+)/g)
				
				
				// console.log(results)
				//res.send(results)
				}

				try{

					var finalJson ="{ "+"meaning"+" :[ "
					for( var n in results){
						var word = await Dict.findAll({
							limit : 1,
							where: {
								hword: results[n]
							},
							attributes: ["eword"]
						})

						if( word.length == 0){
							// finalJson = finalJson + " { null : "+results[n]+ " }, "
							finalJson = finalJson + " { "+results[n]+ " : null }, "
						}else{

						// console.log(word)
						for (var idd in word) {
							
						// console.log(word[idd].eword)
								// finalJson = finalJson + " { "+ word[idd].eword+" : "+results[n]+ " }, "
								finalJson = finalJson + " { "+ results[n]+" : "+word[idd].eword+ " }, "
						
						}
					}
						
					}
					finalJson  = finalJson + " ] }"

					for (var i in songs) {
						//var results = songs[id].Lyric.match(/("[^"]+"|[^"\s]+)/g)
						var newRes ={
							id: songs[i].id,
							//lyric: results,
							tuple: songs[i],
							lyric: finalJson
						}
						console.log(newRes)
						res.send(newRes)

						// //removing ending quotes form final json
						// finalJson=finalJson.replace(new RegExp("\"", "g"), "hi");
						
						// console.log(results)
						//res.send(results)
						}
					console.log(finalJson)

				}catch(err){
					console.log(err)
				}
			
			
			// var arr = []
			// for (var id in songs) {
			// 	console.log(songs[id].lyric)
			// 	res.send(songs[id].lyric)
			// }

			}else{
				console.log("song not found in DB")
			}	
			//User.run("INSERT INTO User (songName) Values (\"abs\")")
		}catch(err) {
			// email already exits
			console.log(err)
			res.status(400).send( {
				error : "Song not found in Database"
			})
		}
	}
}