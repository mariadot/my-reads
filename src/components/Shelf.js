import React from 'react';
import Book from './Book';

const Shelf = props => {
	let books = props.books;
	return(
		<div className='shelf'>
			{ books.map(book => (
				<Book key={book.id} info={book}/>
			)) }
		</div>
	)
};

export default Shelf;