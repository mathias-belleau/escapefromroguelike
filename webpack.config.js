const path = require('path');

module.exports = {
  entry: './src/client/client.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/client'),
  },
  module:{
    rules:[
      {        
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      }
    ]
  }
  
};