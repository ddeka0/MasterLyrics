module.exports = (sequelize, DataTypes)=> {
    var table = sequelize.define("Dict",{
        eword: {
            type: DataTypes.STRING,
            unique: true
        },
        hword: {
            type: DataTypes.STRING,
        },
       
    })
    console.log("======= Songs table created =======")
    return table
}
