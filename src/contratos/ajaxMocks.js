/*
    ****** MOCKUPS PARA ITENS DE CONTRATOS ****
*/
var CONTRATOS_ITEMS  = [
    {
        id: 'contrato-1x',
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
    {
        id: 'contrato-3',
        entidade: {
            razao_social: 'Casa da Mãe Joana',
            nome_fantasia: 'Casa da Mãe Joana Ltda',
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

$.mockjax({
    url: '/api/v1/contratos',
    dataType: 'json',
    contentType: 'text/json',
    responseText: {data: CONTRATOS_ITEMS },
    responseTime: 1000
});