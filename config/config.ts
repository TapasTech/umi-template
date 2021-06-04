import path from 'path';
import fs from 'fs';
import { defineConfig } from 'umi';
import chainWebpack from './webpack.config';

const lessToJS = require('less-vars-to-js');

const antdTheme = lessToJS(fs.readFileSync(path.join(__dirname, '../src/styles/antd/antd-custom.less'), 'utf8'));

export default defineConfig({
  hash: true,
  antd: {},
  nodeModulesTransform: {
    type: 'none',
  },
  chainWebpack,
  cssLoader: {
    localsConvention: 'asIs',
  },
  define: {
    APP_ENV: process.env.UMI_ENV,
  },
  webpack5: {},
  theme: antdTheme,
  title: 'template-title',
  metas: [
    {
      // @ts-ignore
      property: 'og:image',
      content: '/favicon.ico',
    },
    {
      name: 'keywords',
      content: 'template-keywords',
    },
    {
      name: 'description',
      content: 'template-description',
    },
  ],
});
