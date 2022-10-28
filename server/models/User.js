const { DataTypes, db } = require('..');

const User = db.define('user', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,

});

module.exports = { User };
