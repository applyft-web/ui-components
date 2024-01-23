const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '',
    chunkFilename: '[name].js',
    sourceMapFilename: '[name].js.map',
    library: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp|mp4)/,
        use: ['file-loader']
      },
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  /*optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },*/
};
