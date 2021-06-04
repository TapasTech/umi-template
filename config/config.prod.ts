import { defineConfig } from 'umi';

export default defineConfig({
  chunks: ['vendors', 'umi'],
  dynamicImport: {
    loading: '@/components/page-loading',
  },
  forkTSChecker: {},
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
