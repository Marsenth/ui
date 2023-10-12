import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';
import tailwindcss from 'tailwindcss';
import tailwindConfig from './tailwind.config.js';

export default [
  {
    external: ['react', 'react-dom', '@tanstack/react-router'],
    input: 'src/index.tsx',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true
      },
    ],
    plugins: [
      commonjs(),
      image(),
      json(),
      nodeResolve(),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
        plugins: [tailwindcss(tailwindConfig)],
      }),
      typescript({ tsconfig: './tsconfig.json' })
    ],
    watch: {
      include: ["src/**"],
      exclude: "node_modules/**"
    }
  },
  {
    input: "dist/esm/tsconfig/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    watch: {
      include: ["src/**"],
      exclude: "node_modules/**"
    }
  }
];
