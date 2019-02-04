const Promise = require("bluebird")
const bcrypt = Promise.promisifyAll(require("bcrypt-nodejs"))

function hashPassword(user, options) {
	const SALT_FACTOR = 8

	if (!user.changed("password")) {
		return
	}

	return bcrypt
		.genSaltAsync(SALT_FACTOR)
		.then(salt => bcrypt.hashAsync(user.password, salt, null))
		.then(hash => {
			user.setDataValue("password", hash)
		})
}

module.exports = (sequelize, DataTypes) => {
	var table = sequelize.define("User", {
		email: {
			type: DataTypes.STRING,
			unique: true
		},
		password: {
			type: DataTypes.STRING
		}
	}, {
			hooks: {
				// beforeCreate: hashPassword,
				beforeUpdate: hashPassword,
				beforeSave: hashPassword
			}
		})

	table.prototype.comparePassword = function (password) {
		console.log(bcrypt.compareAsync(password, this.password))
		return bcrypt.compareAsync(password, this.password)
	}
	console.log("======= User table created =======")
	table.associate = function (models) {
	}
	return table
}