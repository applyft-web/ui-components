const packageJson = require('./package.json')
const typescript = require('@rollup/plugin-typescript')
const terser = require('@rollup/plugin-terser')
const dts = require('rollup-plugin-dts')
// const url = require('@rollup/plugin-url')
// const svgr = require('@svgr/rollup')

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'cjs'
      },
      {
        file: packageJson.main,
        format: 'esm'
      }
    ],
    external: ['react'],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.stories.tsx']
      }),
      terser(),
      // url(),
      // svgr({ icon: true }),
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    external: [/\.(css|scss)$/],
    plugins: [dts.default()]
  }
]
