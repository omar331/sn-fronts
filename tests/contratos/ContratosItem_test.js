import React from 'react/addons';

import {expect} from 'chai';
import rewire from 'rewire';

import setup from './../setup';

const ContratosItem = rewire('../../src/contratos/ContratosItem');

const TEST_CONTRATO = {
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
};

describe('Item da listagem de contratos', () => {
	it('deve mostrar detalhes do item do contrato ', () => {
		const contrato = TEST_CONTRATO;
		const item = React.addons.TestUtils.renderIntoDocument(
			<ContratosItem contrato={contrato}/>
		);

		const contratoId = React.findDOMNode(item.refs.contratoId);
		const entidadeRazaoSocial = React.findDOMNode(item.refs.entidadeRazaoSocial);
		const contratoInicio = React.findDOMNode(item.refs.inicioEm);
		const contratoTermino = React.findDOMNode(item.refs.terminoEm);

		const taxaLicenciamentoLiquido = React.findDOMNode(item.refs.taxaLicenciamentoLiquido);

		expect(contratoId.textContent).to.equal(contrato.id);
		expect(entidadeRazaoSocial.textContent).to.equal(contrato.entidade.razao_social);
		expect(contratoInicio.textContent).to.equal(contrato.inicio_em_fmt);
		expect(contratoTermino.textContent).to.equal(contrato.termino_em_fmt);
		expect(taxaLicenciamentoLiquido.textContent).to.equal(contrato.taxa_licenciamento_liquido_fmt);
	});
});
