'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: [
		path.join(__dirname, 'src/js/app.js')
	],
	output: {
		path: path.join(__dirname, 'assets/build/'),
		filename: 'app.js'
	},
	plugins: [
		// output a separate css bundle
		new ExtractTextPlugin('app.css'),

		// reloads browser when the watched files change
		new BrowserSyncPlugin({
			// use existing Apache virtual host
			proxy: 'http://ci-webpack.local/',
			tunnel: true,
			// watch the built files and the index file
			files: ['assets/js/*', 'index.php']
		}),

		// set node env
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),

		new CopyWebpackPlugin([
	      { from: 'src/img', to: path.join(__dirname, 'assets/img/'), }
	    ]),

		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	], 

	module: {
		loaders: [
			// transpiles js and ES6
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel' },

			// makes jQuery available to Bootstrap js
			{ test: /bootstrap\/dist\/js\//, loader: 'imports?jQuery=jquery,$=jquery,this=>window' },

			// extracts css as separate output file
			{ test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },

			// loads font icons for Bootstrap css
			{ test: /\.woff(2?)(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff&name=../fonts/[hash:6].[ext]" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream&name=../fonts/[hash:6].[ext]" },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=../fonts/[hash:6].[ext]" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml&name=../svg/[name].[ext]" },
			{ test: /\.(png|jpg|jpeg|gif)(\?.*$|$)/, loader: "file?name=../img/[name].[ext]" }
		]
	}, 
	// needed to make request-promise work
	node: {
		net: 'empty',
		tls: 'empty'
	} 
};