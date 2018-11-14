require('babel-register');
const babel = require('@babel/core');
const babelPresetLatestNode = require('babel-preset-latest-node');

babel.transform('code();', {
  presets: [[babelPresetLatestNode, {
    target: 'current',
  }]],
});

require('babel-polyfill');
require('./src');
