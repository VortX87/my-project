const { DataTypes, db } = require('..');

const Movie = db.define('movie', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    releasedate: DataTypes.STRING,
    synopsis: DataTypes.STRING,
});

module.exports = { Movie };
