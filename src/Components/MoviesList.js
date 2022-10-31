import React, { useState, useEffect } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

function MovieList() {

    useEffect(() => {
        fetchItems()
    }, [])

    const [movies, setMovies] = useState([])

    const fetchItems = async () => {
        const response = await fetch('http://localhost:5000/movies/allmovies')
        const films = await response.json()
        console.log(films)
        setMovies(films)
    }

    return (
        <div>
            {movies.map(movie => (
                <h1><Link to={movie.movieid}>{movie.title}</Link ></h1>
            ))
            }
        </div >
    );
}

export default MovieList;