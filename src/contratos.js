import React from 'react';
import ReactDOM from 'react-dom';

import ContratosFlux from './contratos/ContratosFlux';
import ContratosManager from './contratos/ContratosManager';
import ContratosAPIClient from './contratos/ContratosAPIClient';


var client = new ContratosAPIClient("/api/v1/contratos");

var flux = new ContratosFlux();

flux.setAPIClient(client)

flux.fetchInitialData();
flux.addListener('dispatch', action => {
	console.log('dispatchinxg', action.actionId);
});


var content = document.getElementById('app');
ReactDOM.render(<ContratosManager flux={flux}/>, content);
