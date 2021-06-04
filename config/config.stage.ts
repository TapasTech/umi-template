import { defineConfig } from 'umi';
// const pkg = require('../package.json')
// import pkg from '../package.json'

// const cdnHost = process.env.OSS === 'aliyun' ? '//assets.cbndata.org' : '//pandora.cbndata.org'
// const ciPrefix = process.env.APP_ENV ? `${process.env.APP_ENV}/` : ''

// const dailyPrefix = `${cdnHost}/${pkg.name}/${ciPrefix}${pkg.version}/`

export default defineConfig({
  // publicPath: dailyPrefix,
  chunks: ['vendors', 'umi'],
  dynamicImport: {
    loading: '@/components/page-loading',
  },
  forkTSChecker: {},
  define: {
    'process.env.APP_ENV': 'daily',
  },
  terserOptions: {
    compress: {
      drop_console: true,
    },
  },
  headScripts: [
    {
      src: 'https://cdn-polyfill.cbndata.org/v3/polyfill.js?features=default,es6,es7,Object.entries,Object.keys,Object.values',
      crossOrigin: 'anonymous',
    },
  ],
});
