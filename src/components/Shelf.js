import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = props => {
	const { books, shelf, shelves, changeShelf } = props;
	return(
		<div className='bookshelf'>
			<h2 className='bookshelf-title'>{shelf}</h2>
			<div className='bookshelf-books'>
				<ul className='books-grid'>
					{ books.map(book => (
						<li key={book.id}> 
							<Book 
								book={book} 
								changeShelf={changeShelf} 
								shelves={shelves}
							/>
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
	changeShelf: PropTypes.func.isRequired,
	shelves: PropTypes.object.isRequired
}

export default Shelf;