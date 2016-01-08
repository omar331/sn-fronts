import {Flux} from 'flummox';
import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';

import ContratosActions from './contratos/ContratosActions';
import ContratosStore from './contratos/ContratosStore';

import SortExample from './SortExample';



class AppFlux extends Flux {
	constructor() {
		super();

		this.createActions('contratos', ContratosActions);
		this.createStore('contratos', ContratosStore, this);
	}

	fetchInitialData() {
		this.getActions('contratos').getItems();
	}
}


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedTweet: null
		};
	}

	render() {
		return <div className="app">
			<div className="app-center-column">
				*** contratos ****
			</div>
		</div>
	}
}

var flux = new AppFlux();
flux.fetchInitialData();
flux.addListener('dispatch', action => {
	console.log('dispatching', action.actionId);
});


var content = document.getElementById('app');
//React.render(<App flux={flux}/>, content);



// Render your table
ReactDOM.render(
	<SortExample/>,
	content
);
