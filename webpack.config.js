const merge = require('webpack-merge');
const path = require('path');

// Load base config
const configBase = require('./_ui/libs/utility/webpack/config/webpack.config.js');

// Custom config
const configCustom = {};

// Merge base and custom config
module.exports = merge.strategy({ entry: 'replace' })(configBase, configCustom);
