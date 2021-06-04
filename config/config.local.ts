import { defineConfig } from 'umi';

export default defineConfig({
  mock: {
    exclude: ['mock/**/_*.[jt]s', 'mock/**/_*/**'],
  },
  proxy: {
    '/api': {
      target: 'https://api.domain.com/',
      changeOrigin: true,
    },
  },
});
