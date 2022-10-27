import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import MovieList from './MoviesList';
import Home from './Home';
import RequestFilm from './RequestFilm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/movies" component={MovieList} />
          <Route path="/request" component={RequestFilm} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
