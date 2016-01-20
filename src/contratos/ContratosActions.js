import {Actions} from 'flummox';

export default class ContratosActions extends Actions {
	setAPIClient(client) {
		this.apiClient = client;
	}


	setEntidadesAPIClient(client) {
		this.entidadesApiClient = client;
	}

	getItems(items) {
		var ret;

		if (typeof items != 'undefined') {
			ret = items;
		}

		// TODO: obtem os itens de acordo com o filtro


		return ret;
	}


	/**
	 * Invoca a API para obtenção dos itens (contratos) conforme os filtros fornecidos
	 *
	 * @param filters
	 * @returns promisse para obtenção dos itens
	 */
	queryItems(filters) {
		console.log("  contratos prepared filters = %o", filters);


		var xhr = this.apiClient.get(filters);
		return xhr;
	}


	queryEntidades(filters) {
		var xhr = this.entidadesApiClient.get(filters);
		return xhr;
	}
}

