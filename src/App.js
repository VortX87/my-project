import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import MovieList from './Components/MoviesList';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
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
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
