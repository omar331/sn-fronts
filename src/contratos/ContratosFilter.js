import React from 'react';
import ReactDOM from 'react-dom';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Grid, Row, Col, Button, form } from 'react-bootstrap';

var Select = require('react-select');

var ContratosFilter = React.createClass( {
	getInitialState: function() {

		this.store = this.props.flux.getStore('contratos');
		this.actions = this.props.flux.getActions('contratos');


		this.entidades = this.store.getEntidades();

		return {filters: this.store.getFilter()};
	},

	handleChange: function(property, value) {
		var filters = this.state.filters;
		filters[property] = value;
		this.setState({filters: filters});
	},


	handleFiltrar: function(e) {
		var filters = this.state.filters;
		this.actions.queryItems(filters);
	},

	render: function() {
		return (
			<div>
				<form>
					<Row className="show-grid">
						<Col md={4} className="form-group">
							<Row>
								<Col md={6} className="form-group">
									<label>Início de vigência de</label>
									<DatePicker
										selected={this.state.filters.vigenciaInicioEmDe}
										onChange={this.handleChange.bind(this, 'vigenciaInicioEmDe')}
										className="form-control"
										dateFormat='DD/MM/YYYY'
										/>
								</Col>
								<Col md={6} className="form-group">
									<label>até</label>
									<DatePicker
										selected={this.state.filters.vigenciaInicioEmAte}
										onChange={this.handleChange.bind(this, 'vigenciaInicioEmAte')}
										className="form-control"
										dateFormat='DD/MM/YYYY'
										/>
								</Col>
							</Row>
						</Col>
						<Col md={4} className="form-group">
							<Row>
								<Col md={6} className="form-group">
									<label>Término de vigência de</label>
									<DatePicker
										selected={this.state.filters.vigenciaTerminoEmDe}
										onChange={this.handleChange.bind(this, 'vigenciaTerminoEmDe')}
										className="form-control"
										dateFormat='DD/MM/YYYY'
										/>
								</Col>
								<Col md={6} className="form-group">
									<label>até</label>
									<DatePicker
										selected={this.state.filters.vigenciaTerminoEmAte}
										onChange={this.handleChange.bind(this, 'vigenciaTerminoEmAte')}
										className="form-control"
										dateFormat='DD/MM/YYYY'
										/>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col md={3} className="form-group">
							<label>Entidade</label>
							<Select
								name="form-field-name"
								value={this.state.filters.entidadeId}
								options={this.entidades}
								onChange={this.handleChange.bind(this, 'entidadeId')}
								/>
						</Col>

						<Col md={4} className="form-group">
							<Row>
								<Col md={6} className="form-group">
									<label>Encerrado de</label>
									<DatePicker
										selected={this.state.filters.encerradoEmDe}
										onChange={this.handleChange.bind(this, 'encerradoEmDe')}
										className="form-control"
										dateFormat='DD/MM/YYYY'
										/>
								</Col>
								<Col md={6} className="form-group">
									<label>até</label>
									<DatePicker
										selected={this.state.filters.encerradoEmAte}
										onChange={this.handleChange.bind(this, 'encerradoEmAte')}
										className="form-control"
										dateFormat='DD/MM/YYYY'
										/>
								</Col>
							</Row>
						</Col>

						<Col md={2}>
							<br/>
							<Button bsStyle="primary" onClick={this.handleFiltrar.bind(this)}>Filtrar</Button>
						</Col>

					</Row>

				</form>
			</div>
		);
	}

});

module.exports = ContratosFilter;