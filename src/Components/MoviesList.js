import React, { useState, useEffect } from 'react'
import '../App.css';

function MovieList() {

    useEffect(() => {
        fetchItems()
    }, [])

    const fetchItems = async () => {
        const data = await fetch('http://localhost:5000/movies/allmovies')
        console.log(data)
    }

    return (
        <div>
            <h1>Movies</h1>
        </div>
    );
}

export default MovieList;