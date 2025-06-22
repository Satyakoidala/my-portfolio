const path = require("path");
const sass = require("sass");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name]_debug.js",
	},
	devServer: {
		port: "9009",
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
		liveReload: true,
	},
	stats: {
		errorDetails: true,
	},
	devtool: "source-map", // to enable normal view of es6 js and sass code in browser
	module: {
		rules: [
			{
				test: /\.s?css$/i,
				exclude: /node_modules/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: { sourceMap: true },
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
							implementation: sass,
						},
					},
				],
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: "Satya Koidala | Portfolio",
			filename: "index.html",
			template: "src/pages/homepage.html",
			favicon: "src/assets/profile.png",
		}),
	],
};
