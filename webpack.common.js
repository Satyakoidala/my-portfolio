const path = require("path");

module.exports = {
	entry: {
		bootstrap: path.resolve(__dirname, "./src/assets/bootstrap.js"),
		index: path.resolve(__dirname, "index.js"),
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		clean: true,
		assetModuleFilename: "[name][ext]",
	},
	target: "web",
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				type: "asset/resource",
			},
		],
	},
};
