import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import logo from './images/logo.svg';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={ Home } />
        <Route path='/search' component={ Search } />
      </div>
    );
  }
}

export default App;
