import React from 'react';
import ReactDOM from 'react-dom';


import ContratosFlux from './contratos/ContratosFlux';
import ContratosManager from './contratos/ContratosManager';
import ContratosAPIClient from './contratos/ContratosAPIClient';
import EntidadesAPIClient from './entidades/EntidadesAPIClient';


var client = new ContratosAPIClient("/api/v1/contratos");
var entidadesClient = new EntidadesAPIClient("/api/v1/entidades");

var flux = new ContratosFlux();

flux.setAPIClient(client);
flux.setEntidadesAPIClient(entidadesClient);

flux.fetchInitialData();
flux.addListener('dispatch', action => {
	console.log('dispatchinxg', action.actionId);
});




console.log('xxxxxxxxx');


















var content = document.getElementById('app');
ReactDOM.render(<ContratosManager flux={flux}/>, content);
