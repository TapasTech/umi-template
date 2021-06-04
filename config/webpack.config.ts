import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';

const chainWebpack: any = (config: any, { webpack }: any) => {
  config.plugin('antd-dayjs-webpack-plugin').use(AntdDayjsWebpackPlugin).end();
  process.env.NODE_ENV !== 'development' &&
    config.optimization.splitChunks({
      chunks: 'all',
      minSize: 30000,
      minChunks: 3,
      automaticNameDelimiter: '.',
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test({ resource }) {
            return /[\\/]node_modules[\\/]/.test(resource);
          },
          priority: 10,
        },
      },
    });
};

export default chainWebpack;
