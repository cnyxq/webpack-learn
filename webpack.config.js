const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './app.js',

  output: {
    clean: true // 打包的时候清理多余的文件
  },


  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  // devtool默认情况下为eval
  // devtool: false,
  // devtool: 'eval', // eval模式：每个module会封装到eval里包裹起来执行，并且会在末尾追加注释//@sourceURL (可以定位行数)
  // devtool: 'source-map', // source-map模式：生成一个SourceMap文件 (可以定位行数)
  // devtool: 'hidden-source-map', // hidden-source-map模式：同样会生成SourceMap文件，但是不会再bundle末尾追加注释 (不可以定位行数)
  // devtool: 'inline-source-map', // inline-source-map模式：在末尾生成一个DataUrl形式的SourceMap文件 (可以定位行数)
  // devtool: 'eval-source-map', // eval-source-map模式：每个module会通过eval()来执行，并且生成一个DataUrl形式的SourceMap (可以定位行数)
  // devtool: 'cheap-source-map', // cheap-source-map模式：生成一个没有列信息的SourceMap文件，但是不包含loader的sourcemap文件 (不可以定位行数)
  devtool: 'cheap-module-source-map', // cheap-module-source-map模式：生成一个没有列信息的SourceMap文件，包含loader的sourcemap (可以定位行数)

  plugins: [
    new HtmlWebpackPlugin()
  ]
}