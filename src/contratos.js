import {Flux} from 'flummox';
import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';

var content = document.getElementById('app');

// Table data as a list of array.
const rows = [
	['a1', 'b1', 'c1'],
	['a2', 'b2', 'c2'],
	['a3', 'b31111', 'c22223'],
	['a4', 'b423', 'c4'],
];



const TEST_CONTRATOS = [
	{
		id: 'contrato-1',
		entidade: {
			razao_social: 'Casa da Criança de Campinas',
			nome_fantasia: 'Casa da Criança de Campinas Ltda',
			cnpj: '99.999.999/0001-99'
		},
		chave: 'chave-contrato-1',
		inicio_em: '2016-01-01',
		inicio_em_fmt: '01/01/2016',
		termino_em: '2016-12-31',
		termino_em_fmt: '31/12/2016',
		em_vigencia: true,
		encerrado_em: null,
		encerrado_motivo: null,
		observacoes: 'isso e aquilo',
		taxa_licenciamento: 3000,
		taxa_licenciamento_desconto: 600,
		taxa_licenciamento_liquido: 2400,
		taxa_licenciamento_liquido_fmt: "R$ 2400,00",
		parcelas: 3,
		parcela_valor:  600,
		cancelado: false
	},
	{
		id: 'contrato-2',
		entidade: {
			razao_social: 'Núcleo Batuira',
			nome_fantasia: 'Núcleo Batuira Ltda',
			cnpj: '99.999.999/0001-99'
		},
		chave: 'chave-contrato-2',
		inicio_em: '2016-01-01',
		inicio_em_fmt: '01/01/2016',
		termino_em: '2016-12-31',
		termino_em_fmt: '31/12/2016',
		em_vigencia: true,
		encerrado_em: null,
		encerrado_motivo: null,
		observacoes: 'isso e aquilo',
		taxa_licenciamento: 3000,
		taxa_licenciamento_desconto: 600,
		taxa_licenciamento_liquido: 2400,
		taxa_licenciamento_liquido_fmt: "R$ 2400,00",
		parcelas: 3,
		parcela_valor:  600,
		cancelado: false
	},
];


// Render your table
class ContratoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedTweet: null
		};
	}

	render() {
		return (
			<Table
				rowHeight={50}
				rowsCount={this.props.rows.length}
				width={1000}
				height={5000}
				headerHeight={50}>
				<Column
					header={<Cell>ID</Cell>}
					cell={({rowIndex, ...props}) => (
							<Cell {...props}>
							  {this.props.rows[rowIndex].id}
							</Cell>
						)}
					width={100}
					/>

				<Column
					header={<Cell>Entidade</Cell>}
					cell={({rowIndex, ...props}) => (
							<Cell {...props}>
							  {this.props.rows[rowIndex].entidade.nome_fantasia}
							</Cell>
						)}
					width={250}
					/>

				<Column
					header={<Cell>Início</Cell>}
					cell={({rowIndex, ...props}) => (
							<Cell {...props}>
							  {this.props.rows[rowIndex].inicio_em_fmt}
							</Cell>
						)}
					width={100}
					/>

				<Column
					header={<Cell>Término</Cell>}
					cell={({rowIndex, ...props}) => (
							<Cell {...props}>
							  {this.props.rows[rowIndex].termino_em_fmt}
							</Cell>
						)}
					width={100}
					/>



			</Table>
		);
	}
}

var content = document.getElementById('app');
ReactDOM.render(<ContratoList rows={TEST_CONTRATOS}/>, content);

