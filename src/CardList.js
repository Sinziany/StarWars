import React from 'react';
import Card from './Card';

const CardList = ({films}) => {
 
	return (
		<div className = 'flex justify-center flex-wrap w-100'>
		{
			films.map((user, i) => {
			return (
				<Card
				key = {1} 
				title={films[i].title} 
				opening_crawl={films[i].opening_crawl} 
				director={films[i].director} 
				producer={films[i].producer} 
				release_date={films[i].release_date} 
				/>
				);
			})
		}
		</div>
		);
}

export default CardList;