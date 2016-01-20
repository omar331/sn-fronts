import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';
import { Button, form } from 'react-bootstrap';

class ContratosList extends React.Component {
	constructor(props) {
		super(props);

		this.flux = props.flux;
	}


	componentDidMount() {
		this.updateItemsFromStore();


		this.flux.addListener('dispatch', action => {

			// ---> items foram atualizados
			if ( action.actionId.match(/queryItems/) ) {
				this.updateItemsFromStore();
			}
		});
	}

	handleRenovarClicked(contratoId) {

		this.flux.dispatch(
			"btRenovarClicked",
			{
			contratoId: contratoId
		});
	}

	/**
	 * Atualiza os itens a partir da store
	 */
	updateItemsFromStore() {
		this.setState({
			items: this.flux.getStore('contratos').getItems()
		});
	}

	render() {
		console.log( "st");
		if ( this.state == null ) {
			return (<div></div>);
		}



		var rows = this.state.items;

		console.log("itens =%o", rows);

		return (
			<Table
				rowHeight={50}
				rowsCount={rows.length}
				width={1200}
				height={5000}
				headerHeight={50}>
				<Column
					header={<Cell>ID</Cell>}
					cell={({rowIndex, ...props}) => (
							<Cell {...props}>
							  {rows[rowIndex].id}
							</Cell>
						)}
					width={100}
					/>

				<Column
					header={<Cell>Entidade</Cell>}
					cell={({rowIndex, ...props}) => (
							<Cell {...props}>
							  {rows[rowIndex].entidade.nome_fantasia}
							</Cell>
						)}
					width={250}
					/>

				<Column
					header={<Cell>Início</Cell>}
					cell={({rowIndex, ...props}) => (
							<Cell {...props}>
							  {rows[rowIndex].inicio_em_fmt}
							</Cell>
						)}
					width={100}
					/>

				<Column
					header={<Cell>Término</Cell>}
					cell={({rowIndex, ...props}) => (
							<Cell {...props}>
							  {rows[rowIndex].termino_em_fmt}
							</Cell>
						)}
					width={100}
					/>
				<Column
					header={<Cell>Licença $</Cell>}
					cell={({rowIndex, ...props}) => (
							<Cell {...props}>
							  {rows[rowIndex].taxa_licenciamento_liquido_fmt}
							</Cell>
						)}
					width={100}
					/>
				<Column
					header={<Cell>Parc.</Cell>}
					cell={({rowIndex, ...props}) => (
							<Cell {...props}>
							  {rows[rowIndex].parcelas}
							</Cell>
						)}
					width={60}
					/>
				<Column
					header={<Cell>...</Cell>}
					cell={({rowIndex, ...props}) => (
							<Cell {...props}>
								<Button bsStyle="primary" onClick={this.handleRenovarClicked.bind(this, rows[rowIndex].id)}>renovar</Button>
							</Cell>
						)}
					width={250}
					/>
			</Table>
		);
	}
}


module.exports = ContratosList;