var faker = require('faker');
import {Store} from 'flummox';

export default class ContratosStore extends Store {
	constructor(flux) {
		super();

		this.state = {
			items: []
		};

		this.size = size || 2000;
		this._cache = [];

		const contratosActionIds = flux.getActionIds('contratos');
		this.register(contratosActionIds.getItems, this.handleItemsUpdate);
	}

	getItems() {
		return this.state.items;
	}

	handleItemsUpdate(items) {
		this.setState({items: items});
	}

	createFakeRowObjectData(/*number*/ index) /*object*/ {
		return {
			id: index,
			avartar: faker.image.avatar(),
			city: faker.address.city(),
			email: faker.internet.email(),
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			street: faker.address.streetName(),
			zipCode: faker.address.zipCode(),
			date: faker.date.past(),
			bs: faker.company.bs(),
			catchPhrase: faker.company.catchPhrase(),
			companyName: faker.company.companyName(),
			words: faker.lorem.words(),
			sentence: faker.lorem.sentence(),
		};
	}

	getObjectAt(/*number*/ index) /*?object*/ {
		if (index < 0 || index > this.size){
			return undefined;
		}
		if (this._cache[index] === undefined) {
			this._cache[index] = this.createFakeRowObjectData(index);
		}
		return this._cache[index];
	}

	/**
	 * Populates the entire cache with data.
	 * Use with Caution! Behaves slowly for large sizes
	 * ex. 100,000 rows
	 */
	getAll() {
		if (this._cache.length < this.size) {
			for (var i = 0; i < this.size; i++) {
				this.getObjectAt(i);
			}
		}
		return this._cache.slice();
	}

	getSize() {
		return this.size;
	}
}

