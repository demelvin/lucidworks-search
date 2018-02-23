'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/*
 * Setup Environment Variables
 */
const TARGET = process.env.npm_lifecycle_event;
const isDev = (TARGET === 'dev');
const isProd = (TARGET === 'build');
const isTest = (TARGET === 'test');

const config = {};

/*
 * Entry
 * 
 * @see https://webpack.js.org/concepts/#entry
 */
config.entry = (isTest ? void 0 : './src/js/index.js');

/*
 * Output
 * 
 * @see https://webpack.js.org/concepts/#output
 */
config.output = {
	path: (isTest ? {} : path.resolve(__dirname, 'dist')),
	filename: (isProd ? '[name].[hash].js' : '[name].bundle.js'),
	chunkFilename: (isProd ? '[name].[hash].js' : '[name].bundle.js)')
};

/*
 * Devtool
 * 
 * @see https://webpack.js.org/configuration/devtool/
 */
if (isTest) {
  config.devtool = 'inline-source-map';
}
else if (isProd) {
  config.devtool = 'source-map';
}
else {
  config.devtool = 'eval-source-map';
}

/*
 * Loaders
 * 
 * @see https://webpack.js.org/concepts/#loaders
 */
config.module = {
	rules: [
		
		//JavaScript
		{
			enforce: 'pre',
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'eslint-loader',
			options: {
				failOnError: !isDev,
	        }
		},
		{
			test: /\.js$/,
			use: [
				{ loader: 'ng-annotate-loader' },
				{ loader: 'babel-loader' }
			]
		},
		
		//Styles
		{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [
					{ loader: 'css-loader', query: {sourceMap: true} },
					{ loader: 'postcss-loader', options: { sourceMap: true } },
					{ loader: 'sass-loader', options: { sourceMap: true } }
				],
			})
		},
		
		//Images
		{
			test: /\.(png|jpeg|jpg|gif)$/,
			use: [
				{
					loader: 'file-loader',
					options: {
						name: (isProd ? '[hash].[ext]' : '[name].[ext]'),
						outputPath: 'images/'
					}	
				}
				
			]
		},
		
		//Fonts
		{
			test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
			use: [
				{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/',
						publicPath: '../'
					}
				}
				
			]
		},
		
		//Templates
		{
			test: /\.html$/,
			loader: 'raw-loader'
		}
		
		//TODO remove this if its not needed, leaving for template purposes
//		{
//			test: /\.html$/,
//			exclude: /index\.html/,
//			loader: 'html-loader'
//		}
		
    ]
};

/*
 * Plugins
 * 
 * @see https://webpack.js.org/concepts/#plugins
 */
config.plugins = [
	
	//auto-prefix vendor css if any
	new webpack.LoaderOptionsPlugin({
		test: /\.(css|scss)$/i,
		options: {
			postcss: {
				plugins: [
					autoprefixer({
						browsers: ['last 2 version']
					})
				]
			}
		}
    }),
    //Inject the generated bundle into the index.html file
	new HtmlWebpackPlugin({
		template: './src/index.html',
		inject: true
	}),

	//Creates a separate css file for production. If development we can stream styles within the bundle
	new ExtractTextPlugin({filename: 'css/[name].css', disable: !isProd, allChunks: true}),
	
	//cleanup dist
	new CleanWebpackPlugin(['dist'])
];

// Add build specific plugins
if (isProd) {
  config.plugins.push(
		  //prevent file creation if there are errors
		  new webpack.NoEmitOnErrorsPlugin(),
		  //minify javascript
		  new webpack.optimize.UglifyJsPlugin(),
		  //copy static assets
	      new CopyWebpackPlugin([
	    	  { from: './src/static', to: config.output.path + '/static' }
	      ])
  );
}


module.exports = config;