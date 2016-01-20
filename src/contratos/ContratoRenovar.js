var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
import { Grid, Row, Col, Button, form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

const customStyles = {
    overlay : {
        zIndex: 10
    },
    content : {
        zIndex: 11
    },
};


var App = React.createClass({

    getInitialState: function() {
        return {
            modalIsOpen: false,
            contratoARenovar: {},
            taxa_licenciamento_liquido: 9999,
            taxa_licenciamento_liquido_fmt: "999,99",
            parcela_valor: 555,
            parcela_valor_fmt: "555,00"
        };
    },


    componentDidMount: function() {
        this.updateContratRenovarFromStore();

        console.log(" renovar componentDidMount ");

        this.props.flux.addListener('dispatch', action => {

            // ---> items foram atualizados
            if ( action.actionId.match(/contatoRenovarCarregado/) ) {
                this.updateContratRenovarFromStore();
            }
        });
    },

    handleChange: function(property, value) {
        var contratoARenovar = this.state.contratoARenovar;
        contratoARenovar[property] = value;
        this.setState({contratoARenovar: contratoARenovar});


        console.log("  state = %o", this.state.contratoARenovar);
    },

    handleTaxaChange: function(property, e) {
        this.handleChange(property, e.target.value);

        // recalcula o valor
        var bruto = this.state.contratoARenovar.taxa_licenciamento_bruto;
        var desconto = this.state.contratoARenovar.taxa_licenciamento_desconto;

        var liquido = bruto - desconto;
        var liquido_fmt = liquido.toFixed(2);      // todo: formatar

        var entrada = this.state.contratoARenovar.valor_entrada;
        var parcelas = this.state.contratoARenovar.parcelas;

        var parcela_valor;
        parcela_valor = ((liquido - entrada) / parcelas);
        var parcela_valor_fmt = parcela_valor.toFixed(2);      // todo: formatar

        this.setState({
            taxa_licenciamento_liquido: liquido,
            taxa_licenciamento_liquido_fmt: liquido_fmt,
            parcela_valor: parcela_valor,
            parcela_valor_fmt: parcela_valor_fmt
        });

   },



    handleRenovar: function() {

    },

    updateContratRenovarFromStore:function() {
        var store;

        store = this.props.flux.getStore("contratos");

        this.setState({contratoARenovar: store.state.contratoARenovar});
    },

    openModal: function() {
        this.setState({modalIsOpen: true});
    },

    closeModal: function() {
        this.setState({modalIsOpen: false});
    },

    render: function() {
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles} >

                    <h2>Renovação de contrato</h2>

                    <form>
                        <Row className="show-grid">
                            <Col md={4} className="form-group">
                                <Row>
                                    <Col md={6} className="form-group">
                                        <label>Vigência de</label>
                                        <DatePicker
                                            selected={this.state.contratoARenovar.inicio_em}
                                            onChange={this.handleChange.bind(this, 'inicio_em')}
                                            className="form-control"
                                            dateFormat='DD/MM/YYYY'
                                            />
                                    </Col>
                                    <Col md={6} className="form-group">
                                        <label>até</label>
                                        <DatePicker
                                            selected={this.state.contratoARenovar.termino_em}
                                            onChange={this.handleChange.bind(this, 'termino_em')}
                                            className="form-control"
                                            dateFormat='DD/MM/YYYY'
                                            />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row className="show-grid">
                            <Col md={4} className="form-group">
                                <label>Licença - valor bruto R$</label>
                                <input type="text" className="form-control" value={this.state.contratoARenovar.taxa_licenciamento_bruto} onChange={this.handleTaxaChange.bind(this, 'taxa_licenciamento_bruto')} />
                            </Col>
                            <Col md={4} className="form-group">
                                <label>Desconto R$</label>
                                <input type="text" className="form-control" value={this.state.contratoARenovar.taxa_licenciamento_desconto} onChange={this.handleTaxaChange.bind(this, 'taxa_licenciamento_desconto')} />
                            </Col>
                            <Col md={4} className="form-group">
                                <label>Valor líquido</label><br/>
                                R$ {this.state.taxa_licenciamento_liquido_fmt}
                            </Col>
                        </Row>

                        <Row className="show-grid">
                            <Col md={4} className="form-group">
                                <label>Entrada R$</label>
                                <input type="text" className="form-control" value={this.state.contratoARenovar.valor_entrada} onChange={this.handleTaxaChange.bind(this, 'valor_entrada')} />
                            </Col>
                            <Col md={4} className="form-group">
                                <label>Qtd.parcelas</label>
                                <input type="text" className="form-control" value={this.state.contratoARenovar.parcelas} onChange={this.handleTaxaChange.bind(this, 'parcelas')} />
                            </Col>
                            <Col md={4} className="form-group">
                                <label>Valor da parcela</label><br/>
                                R$ {this.state.parcela_valor_fmt}
                            </Col>
                        </Row>

                        <Row className="show-grid">
                            <Col md={12} className="form-group">
                                <label>Observações</label>
                                <textarea className="form-control" value={this.state.contratoARenovar.observacoes} onChange={this.handleTaxaChange.bind(this, 'observacoes')} />
                            </Col>
                        </Row>


                        <Row className="show-grid">
                            <Col md={2}>
                                <br/>
                                <Button bsStyle="primary" onClick={this.handleRenovar.bind(this)}>Renovar</Button>
                                <Button bsStyle="default" onClick={this.closeModal}>Cancelar</Button>

                            </Col>
                            <Col md={2}>
                                <br/>
                            </Col>
                        </Row>

                    </form>
                </Modal>
            </div>
        );
    }
});

module.exports = App;
