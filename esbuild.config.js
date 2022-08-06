#!/usr/bin/env node

const path = require('path')
const watch = process.argv.includes('--watch')
const esbuildConfig = require('esbuild')
esbuildConfig.build({
  absWorkingDir: path.join(process.cwd(), 'app/javascript'),
  entryPoints: ['application.js'],
  outdir: path.join(process.cwd(), 'app/assets/builds'),

  chunkNames: '[name]-[hash].digested',
  assetNames: '[name]-[hash].digested',
  bundle: true,
  minify: true,
  sourcemap: true,
  splitting: true,
  format: 'esm',
  loader: { '.svg': 'file' },

  watch: watch
}).catch(() => process.exit(1))
