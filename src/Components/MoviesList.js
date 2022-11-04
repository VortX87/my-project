import React, { useState, useEffect } from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function MovieList() {

    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetchItems()
    }, [])

    const fetchItems = async () => {
        const response = await fetch('http://localhost:5000/movies/allmovies')
        const films = await response.json()
        console.log(films)
        setMovies(films)
    }

    useEffect(() => {
        setFilteredMovies(
            movies.filter((movie) =>
                movie.title.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, movies]);


    return (
        <div>
            <Container>
                <Row className='mb-4'>
                    <Col sm='8' md='6' className='mx-auto'>
                        <InputGroup className="searchBar">
                            <InputGroup.Text id='search'>Search</InputGroup.Text>
                            <FormControl
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search for Films by Title"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row lg={4}>
                    {filteredMovies.map(movie => {
                        return (
                            <Col>
                                <Card className="upperCard" border="info" style={{ height: "45rem" }}>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Img className='cardImg'
                                        src={movie.image}></Card.Img>
                                    <Card.Text className="customCard">
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