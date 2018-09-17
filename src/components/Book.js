import React from 'react';
import PropTypes from 'prop-types';
import cover from '../assets/placeholder.svg';

const Book = props => {
	const { book, changeShelf } = props;
	const bookCover =  book.imageLinks ? book.imageLinks.thumbnail : cover;
	const bookCoverClassName = book.imageLinks ? 'book-cover' : 'placeholder';
	const bookCoverAlt = book.imageLinks ? book.title : 'Placeholder book icon';
	const bookShelf = book.shelf;
	const noneShelf = {none: { id: '0', title:'None', name: 'none' }};
	const shelves = {...noneShelf, ...props.shelves};

	return (
		<div className='book'>
			<div className='book-top'>
				<div className={bookCoverClassName}>
					<img src={bookCover} alt={bookCoverAlt}/>
				</div>
				<div className='book-shelf-changer'>
					<select value={bookShelf} onChange={event=>changeShelf({book: book, shelf: event.target.value})}>
						{
							Object.keys(shelves).map((shelf, index) => (
								<option 
									key={index}
									
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