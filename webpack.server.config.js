const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    entry: './src/server/index.js',
    target: 'node',
    resolve: {
        fallback: {
            util: require.resolve("util/"),
            "fs": false
        }
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/server'),
    },
    plugins: [
		new NodePolyfillPlugin()
	],    
};