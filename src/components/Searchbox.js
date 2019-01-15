import React from 'react';

const Searchbox = ({ searchfield, searchChange }) => {
	return(
		<div>
			<input 
				type="search"
				placeholder="Search Planets"
				onChange={ searchChange }
			/>
		</div>
	);
}

export default Searchbox;