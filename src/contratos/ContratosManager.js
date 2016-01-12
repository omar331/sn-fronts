import React from 'react';
import ReactDOM from 'react-dom';

import ContratosFilter from './ContratosFilter';
import ContratosList from './ContratosList';

class ContratosManager extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<div>
				<ContratosFilter/>
				<ContratosList rows={this.props.rows}/>
			</div>
		);
	}
}

module.exports = ContratosManager;