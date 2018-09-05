import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = props => {
	let books = props.books;
	return(
		<div className='bookshelf'>
			<h2 className='bookshelf-title'>{props.shelf}</h2>
			<div className='bookshelf-books'>
				<ul className='books-grid'>
					{ books.map(book => (
						<li key={book.id}> 
							<Book book={book} changeShelf={props.changeShelf}/>
						</li>
					)) }
				</ul>
			</div>
		</div>
	)
};

Shelf.propTypes = {
	books: PropTypes.array.isRequired,
	shelf: PropTypes.string.isRequired,
	changeShelf: PropTypes.func.isRequired
}

export default Shelf;