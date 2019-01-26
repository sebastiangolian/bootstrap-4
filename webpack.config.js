const path = require('path');

module.exports = {
  watchOptions: {
    aggregateTimeout: 1000,
    poll: 5000,
    ignored: ['node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
        ]
      }
    ]
  }
};