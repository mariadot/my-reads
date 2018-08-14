import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from '../components/Shelf';

const Home = props => {
		return(
			<div>
				<Shelf books={props.books}/>
				<Link to='./search'>Search</Link>
			</div>
		)
	};

export default Home;