import classNames from 'classnames';
import React from 'react';

function relativeDate(input: Date) {
	const ageMs = Date.now() - input;	
	const ageMinutes = Math.floor(ageMs / 1000.0 / 60.0);
	const ageHours = Math.floor(ageMinutes / 60.0);

	if (ageMinutes < 1.0) {
		return 'seconds ago';
	} else if (ageHours < 1.0) {
		return `${ageMinutes}m`;
	} else if (ageHours < 24.0) {
		return `${ageHours}h`;
	} else {
		return input.toLocaleDateString();
	}
}


export default class ContratosItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const contrato = this.props.contrato;

		return <tr className={classNames({
			'contratos-item': true,
			'contratos-item-selected': this.props.isSelected
		})}
			ref="container"
			onClick={this.props.onClick}
		>
			<td>
				<span className='contratos-item-id' ref="contratoId">{contrato.id}</span>
			</td>
			<td>
				<span className='contratos-item-razao-social' ref="entidadeRazaoSocial">{contrato.entidade.razao_social}</span>
			</td>
			<td>
				<span ref="inicioEm">{contrato.inicio_em_fmt}</span>
			</td>
			<td>
				<span ref="terminoEm">{contrato.termino_em_fmt}</span>
			</td>
			<td>
				<span ref="taxaLicenciamentoLiquido">{contrato.taxa_licenciamento_liquido_fmt}</span>
			</td>
		</tr>;
	}
}
