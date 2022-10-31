const express = require('express')
const moviesRouter = express.Router()
const { check, validationResult } = require('express-validator')
const { Movie } = require('../models/index')

//All Movies

moviesRouter.get('/allmovies', async (req, res) => {
    const allFilms = await Movie.findAll()
    res.send(allFilms)
})

module.exports = { moviesRouter }