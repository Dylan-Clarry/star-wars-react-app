import React from 'react';
import Card from './Card';
import './Cardlist.css'

const Cardlist = ({ planets }) => {
	return(
		<div className="cardlist">
			{
				planets.map((planet, i) => {
					console.log(planet);
					return(
						<Card
							key = { i }
							name = { planet.name }
							rotation_period = { planet.rotation_period }
							orbital_period = { planet.orbital_period }
							diameter = { planet.diameter }
							climate = { planet.climate }
							gravity = { planet.gravity }
							terrain = { planet.terrain }
							population = { planet.population }
						/>
					);
				})
			}
		</div>
	);
}

export default Cardlist;