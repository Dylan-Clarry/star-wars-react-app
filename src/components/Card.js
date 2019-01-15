import React from 'react';
import './Card.css';

const Card = ({ name, rotation_period, orbital_period, diameter, climate, gravity, terrain, population}) => {
	return(
		<div className="card">
			<h2>{ name }</h2>
			<h4>Population: { population }</h4>
			<h4>Rotation Period: { rotation_period }</h4>
			<h4>Orbital Period: { orbital_period }</h4>
			<h4>Diameter: { diameter }</h4>
			<h4>Climate: { climate }</h4>
			<h4>Gravity: { gravity }</h4>
			<h4>Terrain: { terrain }</h4>
		</div>
	)
}

export default Card;