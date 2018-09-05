import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Shelf from '../components/Shelf';

const Home = (props) => {
	let books = props.books;
	let shelves = {
		currentlyReading: {id: '1', books: [] },
		wantToRead: {id: '2', books: [] },
		read: {id: '3', books: [] }
	};

	let shelvesNames = props.shelves;

	books.forEach((book)=>{
		if(book.shelf === shelvesNames.currentlyReading.name){
			shelves.currentlyReading.books.push(book);
		} else if (book.shelf === shelvesNames.wantToRead.name){
			shelves.wantToRead.books.push(book);
		} else {
			shelves.read.books.push(book);
		}
	});

	return(
		<div className='list-books'>
			<div className='list-books-title'>
				<h1>My Reads</h1>
			</div>
			<div className='bookshelf'>
				{
					Object.keys(shelves).map((shelf, index) => (
						<Shelf key={shelves[shelf].id} books={shelves[shelf].books} shelf={shelvesNames[shelf].title} changeShelf={props.changeShelf} />
					))
				}
				<div className='open-search'>
					<Link to='./search'>Search</Link>
				</div>
			</div>
		</div>
	)
};

Home.propTypes = {
	books: PropTypes.array.isRequired,
	shelves: PropTypes.object.isRequired,
	changeShelf: PropTypes.func.isRequired
}

export default Home;