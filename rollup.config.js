const packageJson = require('./package.json')
const typescript = require('@rollup/plugin-typescript')
const terser = require('@rollup/plugin-terser')
const dts = require('rollup-plugin-dts')
const url = require('@rollup/plugin-url')
const svgr = require('@svgr/rollup')

module.exports = [
  // — library
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'cjs',
        interop: 'compat',
      },
      {
        file: packageJson.main,
        format: 'esm',
        interop: 'compat',
      }
    ],
    external: ['react', 'styled-components', 'react-i18next'],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.stories.tsx']
      }),
      terser(),
      url(),
      svgr({ icon: true }),
    ]
  },
  // — types
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    external: [/\.(css|scss)$/],
    plugins: [dts.default()]
  }
]
