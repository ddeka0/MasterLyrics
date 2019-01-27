module.exports = (sequelize, DataTypes)=> {
    var table = sequelize.define("Song",{
        songNameEng: {
            type: DataTypes.STRING,
            unique: true
        },
        songNameHin: {
            type: DataTypes.STRING,
            unique: true
        },
        Character: {
            type: DataTypes.CHAR,
        },
        Artist: {
            type: DataTypes.STRING,
        },
        Album: {
            type: DataTypes.STRING,
        },
        Year: {
            type: DataTypes.INTEGER,
        },
        Lyric: {
            type: DataTypes.STRING
        },
        Link: {
            type: DataTypes.STRING,
        }
    })
    console.log("======= Songs table created =======")
    return table
}
