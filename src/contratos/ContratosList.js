import React from 'react';

import ContratosItem from './ContratosItem';

export default class ContratosList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <table className="tweet-list">
			<thead>
				<tr>
					<th>ID</th>
					<th>Entidade</th>
					<th>Início</th>
					<th>Término</th>
					<th>$Licença</th>
				</tr>
			</thead>
			<tbody>
				{this.props.contratos.map(contrato =>
					<ContratosItem
						key={contrato.id}
						contrato={contrato}
					/>
				)}
			</tbody>
		</table>
	}
}
