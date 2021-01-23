const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        BACKEND_URI: JSON.stringify(process.env.BACKEND_URI)
      }
    })
  ]
};
