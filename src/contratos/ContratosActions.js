import {Actions} from 'flummox';

const TWITTER_FEED_URL = 'data/tweets.js';
export default class ContratosActions extends Actions {
	setAPIClient(client) {
		this.apiClient = client;
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
		console.log("   prepared filters = %o", filters);


		var xhr = this.apiClient.get(filters);
		return xhr;
	}
}

