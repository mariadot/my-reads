import React from 'react';
import Book from './Book';

const Shelf = props => {
	let books = props.books;
	return(
		<div className='bookshelf'>
			<h2 className='bookshelf-title'>{props.shelf}</h2>
			<div className='bookshelf-books'>
				<ul className='books-grid'>
					{ books.map(book => (
						<li>
							<Book key={book.id} book={book} changeShelf={props.changeShelf}/>
						</li>
					)) }
				</ul>
			</div>
		</div>
	)
};

export default Shelf;