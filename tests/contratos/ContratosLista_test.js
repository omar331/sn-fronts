import React from 'react/addons';
import rewire from 'rewire';
import {expect} from 'chai';

import * as utils from '../utils';

var ContratosList = rewire('../../src/contratos/ContratosList');

const TEST_CONTRATOS = [
	{
		id: 'contrato-1',
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
	},
	{
		id: 'contrato-2',
		entidade: {
			razao_social: 'Núcleo Batuira',
			nome_fantasia: 'Núcleo Batuira Ltda',
			cnpj: '99.999.999/0001-99'
		},
		chave: 'chave-contrato-2',
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
	},
];


describe('Listagem de contratos', () => {
	beforeEach(() => {
		ContratosList = rewire('../../src/contratos/ContratosList');
	});

	it('deve mostrar os itens (DOM class matching)', () => {
		const list = React.addons.TestUtils.renderIntoDocument(<ContratosList contratos={TEST_CONTRATOS}/>);
		const items = React.findDOMNode(list).querySelectorAll('.contratos-item');
		expect(items.length).to.equal(TEST_CONTRATOS.length);
	});
});

