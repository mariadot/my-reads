import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Search from './views/Search';
import './styles/App.css';
import * as BooksAPI from './utils/BooksAPI'

class App extends Component {
  state = {
    books: [],
    shelves: ['currentlyReading', 'wantToRead', 'read']
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(()=>({
        books
      }))
    })
  }

  changeShelf(shelf, book) {
    BooksAPI.update(book, shelf)
    .then((books)=>{
      this.setState(()=>{
        books
      })
    })
  }

  render() {
      return (
        <div className="app">
          <div className='list-books-title'>
            <h1>My Reads</h1>
          </div>
          <Route exact path='/' render={()=>(
            <Home books={this.state.books} changeShelf={this.changeShelf} sheves={this.state.shelves}/>
          )}/>
        <Route path='/search' render={()=>(
          <Search changeShelf={this.changeShelf}/>
        )} />
      </div>
    );
  }
}

export default App;
