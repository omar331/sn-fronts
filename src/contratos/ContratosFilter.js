import React from 'react';
import ReactDOM from 'react-dom';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Grid, Row, Col, Button, form } from 'react-bootstrap';

var Select = require('react-select');


var options = [
	{ value: 'one', label: 'One' },
	{ value: 'two', label: 'Two' },
	{ value: 'three', label: 'Three' },
	{ value: 'four', label: 'Four' },
	{ value: 'five', label: 'Five' }
];
function logChange(val) {
	console.log("Selected: " + val);
}

var ContratosFilter = React.createClass( {
	getInitialState: function() {
		return {
			vigenciaInicioEmDe: null,
			vigenciaInicioEmAte: null,
			vigenciaTerminoEmDe: null,
			vigenciaTerminoEmAte: null,
			encerradoEmDe: null,
			encerradoEmAte: null,
		};
	},

	handleChange: function(property, value) {
		var state = this.state;
		state[property] = value;
		this.setState(state);

		console.log(' state = %o', this.state );
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
										selected={this.state.vigenciaInicioEmDe}
										onChange={this.handleChange.bind(this, 'vigenciaInicioEmDe')}
										className="form-control"
										dateFormat='DD/MM/YYYY'
										/>
								</Col>
								<Col md={6} className="form-group">
									<label>até</label>
									<DatePicker
										selected={this.state.vigenciaInicioEmAte}
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
										selected={this.state.vigenciaTerminoEmDe}
										onChange={this.handleChange.bind(this, 'vigenciaTerminoEmDe')}
										className="form-control"
										dateFormat='DD/MM/YYYY'
										/>
								</Col>
								<Col md={6} className="form-group">
									<label>até</label>
									<DatePicker
										selected={this.state.vigenciaTerminoEmAte}
										onChange={this.handleChange.bind(this, 'vigenciaTerminoEmAte')}
										className="form-control"
										dateFormat='DD/MM/YYYY'
										/>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col md={4} className="form-group">
							<label>Entidade</label>
							<Select
								name="form-field-name"
								value={['one', 'two']}
								options={options}
								onChange={logChange}
								multi={true}
								/>
						</Col>

						<Col md={4} className="form-group">
							<Row>
								<Col md={6} className="form-group">
									<label>Encerrado de</label>
									<DatePicker
										selected={this.state.encerradoEmDe}
										onChange={this.handleChange.bind(this, 'encerradoEmDe')}
										className="form-control"
										dateFormat='DD/MM/YYYY'
										/>
								</Col>
								<Col md={6} className="form-group">
									<label>até</label>
									<DatePicker
										selected={this.state.encerradoEmAte}
										onChange={this.handleChange.bind(this, 'encerradoEmAte')}
										className="form-control"
										dateFormat='DD/MM/YYYY'
										/>
								</Col>
							</Row>
						</Col>
					</Row>

					<Row className="show-grid">
						<Col md={6}>
							<Button bsStyle="primary" onClick={this.handleFiltrar}>Filtrar</Button>
						</Col>
					</Row>
				</form>
			</div>
		);
	}

});

module.exports = ContratosFilter;