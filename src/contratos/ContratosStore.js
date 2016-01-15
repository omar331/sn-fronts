import {Store} from 'flummox';
import moment from 'moment';

export default class ContratosStore extends Store {
	constructor(flux) {
		super();

		this.setState({
			entidades: [
				{ value: 1, label: 'Entidade 1' },
				{ value: 2, label: 'Entidade 2' },
				{ value: 3, label: 'Entidade 3' },
				{ value: 4, label: 'Entidade 4' },
				{ value: 5, label: 'Entidade 5' }
			],
			filters: {
				vigenciaInicioEmDe: null,
				vigenciaInicioEmAte: null,
				vigenciaTerminoEmDe: null,
				vigenciaTerminoEmAte: null,
				encerradoEmDe: null,
				encerradoEmAte: null,
				entidade: 2
			},
			items: []
		});

		const contratoActionIds = flux.getActionIds('contratos');
		this.register(contratoActionIds.getItems, this.handleItemsUpdate);
		this.registerAsync(contratoActionIds.queryItems, this.handleQueryItemsBegin,  this.handleQueryItemsSuccess, this.handleQueryItemsError );
	}

	getEntidades() {
		return this.state.entidades;
	}

	getItems() {
		return this.state.items;
	}

	getFilters() {
		return this.state.filters;
	}

	handleQueryItemsBegin(p) {
		console.log("  handleQueryItemsBegin p = %o", p);
	}

	handleQueryItemsSuccess(response) {
		var items = [];

		if ( response.hasOwnProperty('data') ) {
			items = response.data;
		}
		this.setState({items: items});

		console.log("aaaaaaaa");
	}


	handleQueryItemsError(response) {
		console.log("  handleQueryItemsError p = %o", response);
	}


	handleItemsUpdate(items) {
		console.log("handleItemsUpdate   items = %o", items);

		this.setState({items: items});
	}
}


