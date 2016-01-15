import {Flux} from 'flummox';

import ContratosActions from './ContratosActions';
import ContratosStore from './ContratosStore';

class ContratosFlux extends Flux {
    constructor() {
        super();

        this.createActions('contratos', ContratosActions);
        this.createStore('contratos', ContratosStore, this);
    }

    setAPIClient( client ) {
        this.getActions('contratos').setAPIClient(client);
    }


    fetchInitialData(items) {
        this.getActions('contratos').getItems(items);
    }
}

module.exports = ContratosFlux;