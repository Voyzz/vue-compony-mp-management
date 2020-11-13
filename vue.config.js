module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      title: '管理系统',
    },
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://192.168.150.156:8080',
        // target: 'http://192.168.100.154:8080',
        // target: 'http://192.168.150.253:8080',
        target: 'https://www.voyz.pro/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
