const path = require("path");
const sass = require("sass");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	mode: "production",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name]_[contenthash].js",
		assetModuleFilename: "[name]_[contenthash][ext]",
		clean: true,
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
		splitChunks: {
			chunks: "all",
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all",
				},
			},
		},
		runtimeChunk: "single",
	},
	module: {
		rules: [
			{
				test: /\.s?css$/i,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							implementation: sass,
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name]_[contenthash].css",
		}),
		new HTMLWebpackPlugin({
			title: "Satya Koidala | Portfolio",
			filename: "index.html",
			template: "public/homepage.html",
			favicon: "src/assets/profile.png",
		}),
	],
};
