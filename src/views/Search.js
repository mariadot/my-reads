import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
		this.setState({value: event.target.value}, () => {
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
					{ books.length ? <ol className="books-grid">
						{ books.map(book=>(
							<li key={book.id}>
								<Book book={book} changeShelf={this.props.changeShelf} />
							</li>
						))}
					</ol> : <div>No results for your search query</div>
					}
					
				</div>
			</div>
		)
	}
};

Search.propTypes = {
	books: PropTypes.array.isRequired,
	changeShelf: PropTypes.func.isRequired,
	searchBooks: PropTypes.func.isRequired
}

export default Search;