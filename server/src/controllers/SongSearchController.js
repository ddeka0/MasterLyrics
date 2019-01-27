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
			if (songs.length != 0){
				
				var arr = []
				for (var id in songs) {
				var results = songs[id].Lyric.match(/("[^"]+"|[^"\s]+)/g)
				// console.log(results)
				res.send(results)
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
							finalJson = finalJson + " { null : "+results[n]+ " }, "
						}else{

						// console.log(word)
						for (var idd in word) {
							
						// console.log(word[idd].eword)
								finalJson = finalJson + " { "+ word[idd].eword+" : "+results[n]+ " }, "
						
						}
					}
						
					}
					finalJson  = finalJson + " ] }"
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