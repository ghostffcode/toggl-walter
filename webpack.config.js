module.exports = (function () {
  // configuration to be returned later
  const config = {};

  // entry file
  config.entry = './index.js',

  // output configuration
  config.output = {
    path: __dirname + '/output',
    libraryTarget: 'umd',
    filename: 'bundle.js'
  },

  // babel loader for es6
  config.module = {
    rules: [
      { test: /.js?$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  };

  return config;
})();
