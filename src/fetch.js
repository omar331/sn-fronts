// wrapper around browser and Node-specific polyfills
// for the fetch() API
var fetch;
if (process.browser) {
	require('whatwg-fetch');
	fetch = self.fetch;
} else {
	fetch = require('node-fetch');
}

module.exports = fetch;
