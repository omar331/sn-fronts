import React from 'react';
import ReactDOM from 'react-dom';

import ContratosFilter from './ContratosFilter';
import ContratosList from './ContratosList';
import { Panel } from 'react-bootstrap';

class ContratosManager extends React.Component {
	constructor(props) {
		super(props);

		var flux = props.flux;

		this.store = flux.getStore('contratos');
	}

	render() {
		return (
			<div>
				<Panel>
					<ContratosFilter flux={this.props.flux} />
				</Panel>
				<ContratosList flux={this.props.flux}/>
			</div>
		);
	}
}

module.exports = ContratosManager;