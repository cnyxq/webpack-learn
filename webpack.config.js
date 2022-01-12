const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './app.js',

  output: {
    clean: true // 打包的时候清理多余的文件
  },

  // devtool默认情况下为eval
  // devtool: false,
  devtool: 'eval',

  plugins: [
    new HtmlWebpackPlugin()
  ]
}