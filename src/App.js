import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Search from './views/Search';
import './styles/App.css';
import * as BooksAPI from './utils/BooksAPI'

class App extends Component {
  state = {
    books: [],
    searchedBooks: '',
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

  searchBooks(query) {
      this.setState(()=>{
        searchedBooks: query
      })
  }

  render() {
      return (
        <div className="app">
          <Route exact path='/' render={()=>(
            <Home books={this.state.books} changeShelf={this.changeShelf} sheves={this.state.shelves}/>
          )}/>
        <Route path='/search' render={()=>(
          <Search books={this.state.searchedBooks}  searchBooks={this.searchBooks} changeShelf={this.changeShelf}  />
        )} />
      </div>
    );
  }
}

export default App;
