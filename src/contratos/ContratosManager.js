import React from 'react';
import ReactDOM from 'react-dom';

import ContratosFilter from './ContratosFilter';
import ContratosList from './ContratosList';
import ContratoRenovar from './ContratoRenovar';
import { Panel } from 'react-bootstrap';

class ContratosManager extends React.Component {
	constructor(props) {
		super(props);

		this.flux = props.flux;


		console.log("Flux = %o", this.flux);

		this.store = this.flux.getStore('contratos');
	}

	componentDidMount() {
		console.log("yyyyyyyyyyyyyyyyyyyyyyyy");
		this.flux.addListener('dispatch', action => {
			// ---> items foram atualizados
			if ( action.actionId.match(/btRenovarClicked/) ) {
				console.log("bt-renovar-clicked listener   %o", action);
				this.renovarModal.openModal();
			}
		});
	}

	render() {
		return (
			<div>
				<ContratoRenovar flux={this.props.flux} ref={(ref) => this.renovarModal = ref}/>
				<Panel>
					<ContratosFilter flux={this.props.flux} />
				</Panel>
				<ContratosList flux={this.props.flux}/>
			</div>
		);
	}
}

module.exports = ContratosManager;