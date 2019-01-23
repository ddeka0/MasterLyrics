module.exports = (sequelize, DataTypes)=> {
	console.log("pqr")
	var table = sequelize.define("User",{
		email: {
			type: DataTypes.STRING,
			unique: true
		},
		password: {
			type: DataTypes.STRING
		}
	})
	console.log("table created")
	return table
}