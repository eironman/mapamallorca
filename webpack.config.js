var path = require('path');
var webpack = require('webpack');
const environment = process.env.NODE_ENV || 'production';


// Init configuration
const config = {
  output: {
    path      : path.join(__dirname, 'js/build'),
    filename  : 'bundle.js',
    publicPath: '/js/build/'
  },
  
  module: {
    loaders: [
    {
      test   : /\.js$/,
      exclude: /node_modules/,
      loader : 'babel-loader',
      query  : {
        presets: ['es2015', 'react']
      }
    }]
  }
};

// Entry point
if (environment === 'local') {
  
  config.entry = [
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
    './js/app/index.js'
  ];

} else {
  config.entry = ['./js/app/index.js']
}

// Devtool (for debugging)
if (environment === 'local') {
  config.devtool = 'eval';
}

// Plugins
const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(environment)
    },
    'TILES_SERVER':
      environment === 'local' ?
        JSON.stringify('http://www.in.mapamallorca.com/tiles/') :
        JSON.stringify('http://www.mapamallorca.com/tiles/')
  })
];
if (environment === 'local') {
  plugins.push(new webpack.HotModuleReplacementPlugin());
} else {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
}
config.plugins = plugins;


// Export config
module.exports = config;