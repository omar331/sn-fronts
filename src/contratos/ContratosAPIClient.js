import APIClient from '../APIClient/APIClient';
class ContratosAPIClient extends APIClient {
    constructor(baseUrl) {
        super(baseUrl);
    }

    /**
     * Obtem busca os contratos a partir de um certo filtro
     * @param filters
     * @returns promisse
     */
    get(filters) {
        var url = this.baseUrl;
        return $.get(url, filters);
    }
}

module.exports = ContratosAPIClient;

