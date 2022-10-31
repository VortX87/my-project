const express = require('express')
const moviesRouter = express.Router()
const { check, validationResult } = require('express-validator')
const { Movie } = require('../models/index')

//All Movies

moviesRouter.get('/allmovies', async (req, res) => {
    const allFilms = await Movie.findAll()
    res.send(allFilms)
})

//Specific Movie

moviesRouter.get('/:movieid', async (req, res) => {
    let newString1 = req.params.movieid
    const queriedFilm = await Movie.findOne({ where: { movieid: newString1 } })
    let { title, genre, releasedate, synopsis } = queriedFilm
    let filmdetails = {
        title: title,
        genre: genre,
        releasedate: releasedate,
        synopsis: synopsis
    }
    console.log(queriedFilm)
    res.send(filmdetails)
})

module.exports = { moviesRouter }