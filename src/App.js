import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Search from './views/Search';
import './styles/App.css';
import * as BooksAPI from './utils/BooksAPI'

class App extends Component {
  state = {
    books: [],
    searchedBooks: [],
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

  changeShelf(info) {
    BooksAPI.update(info.book, info.shelf)
    .then((books)=>{
      info.book.shelf = info.shelf;
      this.setState(previousState => ({
        books: previousState.books.filter(b => b.id !== info.book.id).concat([info.book])
      }))
    })
  }

  searchBooks(searchedBooks) {
    if(searchedBooks){
      BooksAPI.search(searchedBooks)
      .then((books) => {
        if(books.error){
          books = []
        }

        this.setState(()=>({
          searchedBooks: books
        }))
      })
    } else {
      this.setState(()=>({
        searchedBooks: []
      }))
    }
    
  }

  render() {
      return (
        <div className="app">
          <Route exact path='/' render={()=>(
            <Home 
              books={this.state.books} 
              changeShelf={(info)=>this.changeShelf(info)} 
              shelves={this.state.shelves} 
            />
          )}/>
          <Route path='/search' render={()=>(
            <Search 
              books={this.state.searchedBooks}  
              searchBooks={(query) => this.searchBooks(query)} 
              changeShelf={(info)=>this.changeShelf(info)}  
              shelves={this.state.shelves}
              />
          )} />
      </div>
    );
  }
}

export default App;
