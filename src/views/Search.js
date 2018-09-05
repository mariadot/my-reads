import React, { Component } from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
>>>>>>> dec8b9cfefee30b6a1fee6607bda87d0de5121ec
import { Link } from 'react-router-dom';
import Book from '../components/Book';

class Search extends Component {
	constructor(props){
		super(props)
		this.state = {
			value: ''
		}
		
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
<<<<<<< HEAD
		this.setState({value: event.target.value}, () => {
=======
		this.setState({value: event.target.value}, function(){
>>>>>>> dec8b9cfefee30b6a1fee6607bda87d0de5121ec
			this.props.searchBooks(this.state.value);
		});
	}

	render() {
		let books = this.props.books;
		return (
			<div className='search-books'>
				<div className='search-books-bar'>
					<Link className='close-search' to='./'>Home</Link>
					<div className='search-books-input-wrapper'>
						<input value={this.state.value} onChange={this.handleChange} type='text' placeholder='Search by title or author' />
					</div>
				</div>
				<div className="search-books-results">
<<<<<<< HEAD
					{ books.length ? <ol className="books-grid">
						{ books.map(book=>(
							<li key={book.id}>
								<Book book={book} changeShelf={this.props.changeShelf} />
							</li>
						))}
					</ol> : <div>No results for your search query</div>
					}
					
=======
					<ol className="books-grid">
					
					</ol>
>>>>>>> dec8b9cfefee30b6a1fee6607bda87d0de5121ec
				</div>
			</div>
		)
	}
};
<<<<<<< HEAD

Search.propTypes = {
	books: PropTypes.array.isRequired,
	changeShelf: PropTypes.func.isRequired,
	searchBooks: PropTypes.func.isRequired
}
=======
>>>>>>> dec8b9cfefee30b6a1fee6607bda87d0de5121ec

export default Search;