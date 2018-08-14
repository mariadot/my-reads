import React from 'react';

const Book = props => {
	return(
		<div className="book">
			<img src={props.info.imageLinks.smallThumbnail}/>
			<p>{props.info.title}</p>
			<p>{props.info.authors[0]}</p>
			<p>{props.info.publishedDate}</p>
		</div>
	)
};

export default Book;