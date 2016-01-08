var RewirePlugin = require('rewire-webpack');

module.exports = {
	entry: {
		app: ['./src/app', 'webpack/hot/dev-server'],
		app: ['./src/app', 'webpack/hot/dev-server-yeah'],
		tests: ['./tests/tests', 'webpack/hot/dev-server']
	},
	output: {
		path: 'dist',
		filename: '[name].bundle.js',
		publicPath: '/dist/'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},{
			test: /tests.*_test\.js$/,
			loader: 'mocha-loader!babel-loader'
		},{
			test: /node_modules\/(jsdom|node-fetch)/,
			loader: 'null-loader'
		}]
	},
	plugins: [
		new RewirePlugin()
	],
	devServer: {
		port: 8070,
		host: "0.0.0.0"
	},
	watchOptions: {
		poll: true
	}
};
