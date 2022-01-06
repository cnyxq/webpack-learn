const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js', // 打包入口
  output: {
    filename: 'bundle.js', // 输出文件的文件名
    // __dirname表示获取到我们当前的webpack.config.js文件所在的物理路径
    path: path.resolve(__dirname, './dist'), // 文件的输出路径
    clean: true, // 清理上一次打包遗留的文件
    // [contenthash] 根据文件的内容自动生成hash字符串文件名
    // [ext] 根据文件扩展名自动生成对应的扩展名
    assetModuleFilename: 'images/[contenthash][ext]' // 自己定义打包输出的文件路径文件名
  },
  mode: 'development',

  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // 指定文件模板生成对应文件
      filename: 'app.html', // 生成的文件名
      inject: 'body' // 自定义scripte标签的位置
    })
  ],

  devServer: {
    static: './dist'
  },

  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset/resource', // 发送一个单独的文件并导出url
        // generator: { // 这里的优先级要比output里的优先级高
        //   filename: 'images/test.png'
        // }
      },
      {
        test: /\.svg$/,
        type: 'asset/inline' // 导出一个资源的 data url
      },
      {
        test: /\.txt$/,
        type: 'asset/source' // 导出资源的源代码
      },
      {
        test: /\.jpeg$/,
        type: 'asset', // 通用资源类型,webpack将按默认条件，自动的在resource和inline质检进行选择
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4kb, 当大于4kb的时候走resource，否则危inline
          }
        }
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader'] // 通过css-loader解析css文件，然后通过style-loader将解析后的内容渲染到页面上(此处先后顺序不能错误)
      }
    ]
  }
}