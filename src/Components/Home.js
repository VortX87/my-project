import React from 'react'
import '../App.css';
import Carousel from 'react-bootstrap/Carousel'
import { useEffect, useState } from 'react'

function Home() {

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
            <h1>Home</h1>

            <h2>Welcome to 'The Blackhole' Retro film store</h2>
            <Carousel>
                {movies.map((movie) =>
                    <Carousel.Item>
                        <img className="w-40" src={movie.image} />
                    </Carousel.Item>
                )}
            </Carousel>

        </div>
    );
}

export default Home;