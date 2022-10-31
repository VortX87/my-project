const express = require('express')
const usersRouter = express.Router()
const { check, validationResult } = require('express-validator')
const { User, Movie } = require('../models/index')

usersRouter.get('/', (req, res) => {
    res.send("Its works")
})

module.exports = { usersRouter }