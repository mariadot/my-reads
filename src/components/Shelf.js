import React from 'react';
import Book from './Book';

const Shelf = props => {
	let books = props.books;
	return(
		<div>
			<h2>{props.shelf}</h2>
			<div className='shelf'>
				{ books.map(book => (
					<Book key={book.id} info={book} changeShelf={props.changeShelf}/>
				)) }
			</div>
		</div>
	)
};

export default Shelf;