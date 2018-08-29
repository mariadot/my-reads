import React from 'react';

const Book = props => {
	const selectOptions = ['currentlyReading', 'wantToRead', 'read'];
	console.log(props.info.shelf);
	return(
		<div className='book'>
			<div className='book_cover'>
				<img src={props.info.imageLinks.thumbnail}/>
			</div>
			
			<p>{props.info.title}</p>
			<p>{props.info.authors[0]}</p>
			<p>{props.info.publishedDate.slice(0, 4)}</p>
			<select onChange={(event)=>props.changeShelf(event.target.value, props.info)}>
				<option value="move" selected disabled>Move to...</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
			</select>
		</div>
	)
};

export default Book;