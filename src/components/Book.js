import React from 'react';

const Book = props => {
	return(
		<div className='book'>
		<div className='book-top'>
		<div className='book-cover'>
				<img src={props.info.imageLinks.thumbnail}/>
			</div>
			<div className='book-shelf-changer'>
				<select onChange={(event)=>props.changeShelf(event.target.value, props.info)}>
					<option value="move" selected disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
				</select>
			</div>
		</div>
			
			<p className='book-title'>{props.info.title}</p>
			<p className='book-authors'>{props.info.authors[0]}</p>
			<p>{props.info.publishedDate.slice(0, 4)}</p>
		</div>
	)
};

export default Book;