import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';

class ContratosList extends React.Component {
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
				width={1200}
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
				<Column
					header={<Cell>Licença $</Cell>}
					cell={({rowIndex, ...props}) => (
							<Cell {...props}>
							  {this.props.rows[rowIndex].taxa_licenciamento_liquido_fmt}
							</Cell>
						)}
					width={100}
					/>
				<Column
					header={<Cell>Parc.</Cell>}
					cell={({rowIndex, ...props}) => (
							<Cell {...props}>
							  {this.props.rows[rowIndex].parcelas}
							</Cell>
						)}
					width={60}
					/>
			</Table>
		);
	}
}


module.exports = ContratosList;