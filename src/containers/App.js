import React, { Component } from 'react';
import './App.css';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';

class App extends Component {
	constructor() {
		super();
		this.state = {
			planets: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://swapi.co/api/planets')
			.then(response => response.json())
			.then(planets => this.setState({ planets: planets.results }));
	}

	onSearchChange = event => {
		this.setState({ searchfield: event.target.value });
	}

	render() {
		const { planets, searchfield } = this.state;
		const filteredPlanets = planets.filter(planet => {
			return planet.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		return !planets.length ?
		<h1>loading</h1> :
		(
			<div className="App">
				<Searchbox searchChange={ this.onSearchChange } />
				<Cardlist planets={ filteredPlanets } />
			</div>
		);
	}
}

export default App;
