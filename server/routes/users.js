const express = require('express')
const usersRouter = express.Router()
const { check, validationResult } = require('express-validator')
const { User, Movie } = require('../models/index')

usersRouter.get('/', (req, res) => {
    res.send("Its works")
})

usersRouter.post('/adduser', async (req, res) => {
    await User.create(req.body)
    res.sendStatus(200)
})

module.exports = { usersRouter }