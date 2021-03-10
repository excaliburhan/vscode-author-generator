import path from 'path';
import rollupTypescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import pkg from './package.json';

const paths = {
  input: path.join(__dirname, '/src/extension.ts'),
  output: path.join(__dirname, '/dist')
};

const rollupConfig = {
  input: paths.input,
  output: [
    {
      file: path.join(paths.output, 'extension.js'),
      format: 'cjs',
      name: pkg.name,
      exports: 'named'
    }
  ],
  // external: ['moment'],
  plugins: [
    commonjs(),
    resolve(),
    rollupTypescript(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: [...DEFAULT_EXTENSIONS, '.ts']
    })
  ]
};

export default rollupConfig;
