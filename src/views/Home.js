import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Shelf from '../components/Shelf';

const Home = (props) => {
	const { books, shelves, changeShelf } = props;
	const bookShelves = {
		currentlyReading: {id: '1', books: [] },
		wantToRead: {id: '2', books: [] },
		read: {id: '3', books: [] }
	};

	books.forEach((book)=>{
		if(book.shelf === shelves.currentlyReading.name){
			bookShelves.currentlyReading.books.push(book);
		} else if (book.shelf === shelves.wantToRead.name){
			bookShelves.wantToRead.books.push(book);
		} else {
			bookShelves.read.books.push(book);
		}
	});

	return(
		<div className='list-books'>
			<div className='list-books-title'>
				<h1>My Reads</h1>
			</div>
			<div className='bookshelf'>
				{
					Object.keys(bookShelves).map((shelf, index) => (
						<Shelf 
							key={bookShelves[shelf].id}
							books={bookShelves[shelf].books} 
							shelf={shelves[shelf].title} 
							changeShelf={changeShelf}
							shelves={shelves}
						/>
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