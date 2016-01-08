import {Actions} from 'flummox';

const TWITTER_FEED_URL = 'data/tweets.js';
export default class ContratosActions extends Actions {
	getItems() {
		[
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
	}
}

