import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
	let book = props.book;
	return (
		<div className='book'>
			<div className='book-top'>
			<div className='book-cover'>
					<img src={book.imageLinks.thumbnail} alt={book.title}/>
				</div>
				<div className='book-shelf-changer'>
					<select onChange={event=>props.changeShelf({book: props.book, shelf: event.target.value})}>
						<option value="move" selected disabled>Move to...</option>
						<option value="currentlyReading">Currently Reading</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
					</select>
				</div>
			</div>
			
			<p className='book-title'>{book.title}</p>
			{ book.authors && 
				<p className='book-authors'>{book.authors[0]}</p>
			}
			{ book.publishedDate && 
				<p>{book.publishedDate.slice(0, 4)}</p>
			}
		</div>
	)
};

Book.propTypes = {
	book: PropTypes.object.isRequired,
	changeShelf: PropTypes.func.isRequired
}

export default Book;