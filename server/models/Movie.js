const { DataTypes, db } = require('..');

const Movie = db.define('movie', {
    movieid: {
        type: DataTypes.STRING,
        unique: true
    },
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    releasedate: DataTypes.STRING,
    synopsis: DataTypes.STRING,
    image: DataTypes.STRING
});

module.exports = { Movie };
