const babel = require('rollup-plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const nodePolyfills = require('rollup-plugin-node-polyfills');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
    resolve(),
    commonjs(),
    nodePolyfills(),
  ],
};
