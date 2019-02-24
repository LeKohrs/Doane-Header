const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// Check Environment.
let isProduction = false;
if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV === 'production') {
  isProduction = true;
}

// Environment-specific settings.
const environmentSettings = {
  watch: !isProduction,
  sourceMap: !isProduction,
  devTool: isProduction ? false : 'source-map',
  additionalPlugins: [],
  sassOutputStyle: isProduction ? 'compressed' : 'compact',
};

// Add additional plugins in Production.
if (isProduction) {
  environmentSettings.additionalPlugins.push(new UglifyJSPlugin({
    sourceMap: true,
  }));
}

// PostCSS Config
const postCSSFileName = 'postcss.config.js';
let postCSSFilePath = path.resolve(__dirname, postCSSFileName);
if (fs.existsSync(path.resolve(postCSSFileName))) {
  postCSSFilePath = path.resolve(postCSSFileName);
}

// Babel Config
const babelFileName = '.babelrc';
let babelFilePath = path.resolve(__dirname, babelFileName);
if (fs.existsSync(path.resolve(babelFileName))) {
  babelFilePath = path.resolve(babelFileName);
}

const extractSass = new ExtractTextPlugin({
  filename: '[name]',
  allChunks: true,
});

module.exports = {
  entry: {
    'js/main.bundle.js': path.resolve('_ui/skin/src/js/main.js'),
    'css/style.css': path.resolve('_ui/skin/src/sass/style.scss'),
  },
  watch: environmentSettings.watch,
  plugins: [
    // Extract node_modules JS into vendor file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.bundle.js',
      minChunks(module) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.resolve('node_modules')) === 0
        );
      },
    }),
    // Extract SASS
    extractSass,
    // Clean up bundles
    new webpack.optimize.ModuleConcatenationPlugin(),
    ...environmentSettings.additionalPlugins,
  ],
  output: {
    // Output all files, relying on their names for folder structures
    path: path.resolve('_ui/skin/dist'),
    filename: '[name]',
  },
  resolve: {
    extensions: ['.js', '.json', '.vue', '.scss'],
    alias: {},
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            extends: babelFilePath,
          },
        },
      },
      {
        test: /\.(png|jp?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10,
          name: 'img/[name].[ext]',
        },
      },
      {
        test: /\.(svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10,
          name: 'svg/[name].[ext]',
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]',
        },
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          // Fix relative directories for url() -- mostly for images.
          publicPath: '../',
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: environmentSettings.sourceMap,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: environmentSettings.sourceMap,
                config: {
                  path: postCSSFilePath,
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: environmentSettings.sourceMap,
                outputStyle: environmentSettings.sassOutputStyle,
              },
            },
          ],
        }),
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: environmentSettings.devTool,
};
