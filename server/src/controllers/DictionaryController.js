const { Dict } = require("../models")

module.exports = {
	// this module will perform the required functionality for 
	// song search for do manipulation on song lyric
	editMeaning: async function (req, res) {
		console.log(req.body)
		let msg = "Request for editMeaning found"
		console.log(msg)

		const result = await Dict.findAll({
			where: {
				hword: req.body.hword
			},
			fields: ["eword"]
		})

		if (result.length == 0) {
			// create a row
			try {
				const wordMeaning = await Dict.create(req.body)
				res.send(result.toJSON())
			} catch (err) {
				// email already exits
				res.status(400).send({
					error: "This email is alread in use"
				})
			}
		} else {
			// update the specific rows
			let updateValue = {
				eword: req.body.eword
			}
			Dict.update(updateValue, {
				where: {
					hword: req.body.hword
				}
			}).then((result) => {
				// title will now be 'foooo' but description is the very same as before
				res.send(result)
			})
		}

	}
}