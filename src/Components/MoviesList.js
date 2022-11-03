import React, { useState, useEffect } from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

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
            <Container>
                <Row lg={5}>
                    {movies.map(movie => {
                        return (
                            <Col>
                                <Card border="info" style={{ height: "40rem" }}>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Img
                                        src={movie.image}></Card.Img>

                                    <Card.Text>
                                        <ul>
                                            {movie.genre}<br></br>
                                            {movie.releasedate}<br></br>
                                            {movie.synopsis}
                                        </ul>
                                    </Card.Text>
                                </Card>
                            </Col>
                        )
                    })
                    }
                </Row>
            </Container>
        </div >
    );
}

export default MovieList;