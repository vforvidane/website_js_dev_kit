import webpack from 'webpack';
import path from 'path';

export default {
	debug: true,
	devtool: 'inline-source-map',
	noInfo: true,
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',	// choose from web or node or electron, etc.
	output: {	// webpack doesn't actually create anything since it is all in memory but is simulates the existence of this structure
		path: path.resolve(__dirname, 'src'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'src')
	},
	plugins: [],
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
			{test: /\.css$/, loaders: ['style', 'css']}
		]
	}
}
