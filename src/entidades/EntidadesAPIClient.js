import APIClient from '../APIClient/APIClient';
import fetch from '../fetch';

class EntidadesAPIClient extends APIClient {
    constructor(baseUrl) {
        super(baseUrl);
    }

    /**
     * Obtem busca as entidades a partir de um certo filtro
     * @param filters
     * @returns promisse
     */
    get(filters) {
        var url = this.baseUrl;

        return $.get(url, filters);
    }
}

module.exports = EntidadesAPIClient;

