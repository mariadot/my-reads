import React from 'react';

const Book = props => {
	let book = props.book;
	return (
		<div className='book'>
		<div className='book-top'>
		<div className='book-cover'>
				<img src={book.imageLinks.thumbnail} alt={book.title}/>
			</div>
			<div className='book-shelf-changer'>
				<select onChange={event=>props.changeShelf({value: event.target.value, book: props.book})}>
					<option value="move" selected disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
				</select>
			</div>
		</div>
			
			<p className='book-title'>{book.title}</p>
			<p className='book-authors'>{book.authors[0]}</p>
			<p>{book.publishedDate.slice(0, 4)}</p>
		</div>
	)
};

export default Book;