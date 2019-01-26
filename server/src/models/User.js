module.exports = (sequelize, DataTypes)=> {
	console.log("pqr")
	var table = sequelize.define("Song",{
		songNameHin: {
			type: DataTypes.STRING,
			unique: true
		},
		songNameEng: {
			type: DataTypes.STRING,
			unique: true
		},
		lyric: {
			type: DataTypes.STRING
		}
	})
	console.log("table created")
	return table
}