const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  mode: 'development',
  entry: './app.js',

  output: {

    publicPath: '/',
    clean: true // 打包的时候清理多余的文件
  },

  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true, // 设置是否在服务器端进行代码压缩,使它可以在传输的过程中减少数据的大小
    port: 3000, // 指定端口号
    host: '0.0.0.0',

    headers: {
      'X-Access-Token': 'yxq123'
    },

    proxy: {
      '/api': 'http://localhost:9000'
    },

    // https: true,
    http2: true,

    historyApiFallback: true
  },

  plugins: [
    new HtmlWebpackPlugin()
  ]
}