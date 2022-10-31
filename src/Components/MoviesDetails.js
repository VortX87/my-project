import React, { useState, useEffect } from 'react'
import '../App.css';

function MovieDetails() {

    useEffect(() => {
        fetchDetails()
    }, [])

    const [detail, setDetail] = useState([])

    const fetchDetails = async () => {
        const response = await fetch('http://localhost:5000/movies/${movieid}')
        const filmData = await response.json()
        console.log(filmData)
        setDetail(filmData)
    }


    return (
        <div>
            <h1>Movie Details</h1>
        </div >
    );
}

export default MovieDetails;