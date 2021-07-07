//import { terser } from 'rollup-plugin-terser';
const { terser } = require('rollup-plugin-terser');

module.exports = {
  rollup(config, options) {
    options.env = 'production';
    config.plugins.push(terser());
    return config;
  },
};
