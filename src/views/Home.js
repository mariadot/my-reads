import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from '../components/Shelf';

const Home = props => {
	let shelves = {
		read: [],
		currentlyReading: [],
		wantToRead: []
	}

	props.books.forEach((book)=>{
		if(book.shelf === 'currentlyReading'){
			shelves.currentlyReading.push(book);
		} else if (book.shelf === 'wantToRead'){
			shelves.wantToRead.push(book);
		} else {
			shelves.read.push(book);
		}
	});

	return(
		<div className='bookshelf'>
			<Shelf books={shelves.read} shelf='Read' changeShelf={props.changeShelf}/>
			<Shelf books={shelves.currentlyReading} shelf='Currently Reading' changeShelf={props.changeShelf} />
			<Shelf books={shelves.wantToRead} shelf='Want to Read' changeShelf={props.changeShelf} />
			<Link to='./search'>Search</Link>
		</div>
	)
};

export default Home;