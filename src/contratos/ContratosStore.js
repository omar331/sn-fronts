import {Store} from 'flummox';
import moment from 'moment';

export default class ContratosStore extends Store {

	constructor(flux) {
		super();

		this.setState({
			filters: {
				vigenciaInicioEmDe: null,
				vigenciaInicioEmAte: null,
				vigenciaTerminoEmDe: null,
				vigenciaTerminoEmAte: null,
				encerradoEmDe: null,
				encerradoEmAte: null,
				entidade: 2
			},
			contratoARenovar: {
				id: null,
				inicio_em: moment("2016-02-01"),
				termino_em: moment("2016-12-31"),
				taxa_licenciamento_bruto: 3000,
				taxa_licenciamento_desconto: 500,
				valor_entrada: 1000,
				parcelas: 3,
				parcelas_valor: 500,
				observacoes: "lalalal"

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


