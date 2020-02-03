import React from 'react';
import {Go_youtube} from './Go_youtube';

const Card = ({title, opening_crawl,director,producer,release_date}) => {
	return (
	 	<div className = 'tc bg-dark-blue light-silver br3 pa4 ma3 grow shadow-5 w-30 flex-auto'>
			<div>
				<h2 className='b underline'	>
					<a className = 'light-purple'
					href = {Go_youtube[title]}
					target="_blank"
					rel="noopener noreferrer"
					> {title} </a>
				</h2>
				<h3> Released on {release_date} it was directed by {director} and was 
				proproduced by {producer}
				</h3>
				<p>{opening_crawl}</p> 
			</div>
		</div>
		);
}
export default Card;