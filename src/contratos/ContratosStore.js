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
			filter: {
				vigenciaInicioEmDe: null,
				vigenciaInicioEmAte: null,
				vigenciaTerminoEmDe: null,
				vigenciaTerminoEmAte: null,
				encerradoEmDe: null,
				encerradoEmAte: null,
				entidadeId: 2
			},
			items: []
		});

		const contratoActionIds = flux.getActionIds('contratos');
		this.register(contratoActionIds.getItems, this.handleItemsUpdate);
		this.registerAsync(contratoActionIds.queryItems, this.handleQueryItemsBegin,  this.handleQueryItemsSuccess );
	}

	getEntidades() {
		return this.state.entidades;
	}

	getItems() {
		return this.state.items;
	}

	getFilter() {
		return this.state.filter;
	}

	handleQueryItemsBegin(p) {
		console.log("  handleQueryItemsBegin p = %o", p);
	}

	handleQueryItemsSuccess(response) {

		console.log("  handleQueryItemsSuccess response = %o", response);



		var items = this.state.items;

		items.push(
			{
				id: 'contrato-1a',
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
			}
		);


		this.setState({items: items});

		console.log( this.state.items );


	}


	handleItemsUpdate(items) {
		console.log("handleItemsUpdate   items = %o", items);

		this.setState({items: items});
	}
}


