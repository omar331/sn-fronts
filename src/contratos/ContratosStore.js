import {Store} from 'flummox';

export default class ContratosStore extends Store {
	constructor(flux) {
		super();

		this.state = {
			items: []
		};

		const contratosActionIds = flux.getActionIds('contratos');
		this.register(contratosActionIds.getItems, this.handleItemsUpdate);
	}

	getItems() {
		return this.state.items;
	}

	handleItemsUpdate(items) {
		this.setState({items: items});
	}
}

