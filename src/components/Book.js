import React from 'react';
import PropTypes from 'prop-types';
import cover from '../assets/placeholder.svg';

const Book = props => {
	const { book, shelves, changeShelf } = props;
	const bookCover =  book.imageLinks ? book.imageLinks.thumbnail : cover;
	const bookCoverClassName = book.imageLinks ? 'book-cover' : 'placeholder';
	const bookCoverAlt = book.imageLinks ? book.title : 'Placeholder book icon';
	const bookShelf = book.shelf;

	return (
		<div className='book'>
			<div className='book-top'>
				<div className={bookCoverClassName}>
					<img src={bookCover} alt={bookCoverAlt}/>
				</div>
				<div className='book-shelf-changer'>
					<select onChange={event=>changeShelf({book: book, shelf: event.target.value})}>
						<option value=''>None</option>
						{
							Object.keys(shelves).map((shelf, index) => (
								<option 
									key={index}
									selected={shelves[shelf].name === bookShelf} 
									value={shelves[shelf].name}
								>
									{shelves[shelf].title}
								</option>
							))
						}
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