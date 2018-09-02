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
    shelves: {
      currentlyReading: { id: '1', title:'Currently Reading', name: 'currentlyReading' }, 
      wantToRead: { id: '2', title: 'Want To Read', name: 'wantToRead' }, 
      read: { id: '3', title: 'Read', name: 'read'}
    }
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
      book.shelf = shelf;
      this.setState(previousState => ({
        books: previousState.books.filter(b => b.id !== book.id).concat([book])
      }))
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
            <Home books={this.state.books} changeShelf={this.changeShelf.bind(this)} shelves={this.state.shelves}/>
          )}/>
        <Route path='/search' render={()=>(
          <Search books={this.state.searchedBooks}  searchBooks={this.searchBooks} changeShelf={this.changeShelf}  />
        )} />
      </div>
    );
  }
}

export default App;
