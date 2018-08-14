import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Search from './views/Search';
import logo from './images/logo.svg';
import './styles/App.css';
import * as BooksAPI from './utils/BooksAPI'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(()=>({
        books
      }))
    })
  }

  render() {
      return (
        <div className="App">
          <Route exact path='/' render={()=>(
            <Home books={this.state.books}/>
          )}/>
        <Route path='/search' component={ Search } />
      </div>
    );
  }
}

export default App;
