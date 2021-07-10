// const path = require('path');
import * as path from 'path';
export default {
  entry: './src/client/client.js',
  output: {
    filename: 'main.js',
    path: path.resolve("./", 'dist/client'),
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