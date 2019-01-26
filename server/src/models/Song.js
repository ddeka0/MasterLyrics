module.exports = (sequelize, DataTypes)=> {
	var table = sequelize.define("Song",{
		songName: {
			type: DataTypes.STRING,
			unique: true
		},
		lyric: {
			type: DataTypes.STRING
		}
	})
	console.log("======= Songs table created =======")
	return table
}