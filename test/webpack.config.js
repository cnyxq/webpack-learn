const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 抽离css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') // 压缩css
const toml = require('toml')
const yaml = require('yamljs')
const json5 = require('json5')

/**
 * 代码分离
 * 1、入口起点：使用entry配置手动地分离代码
 *    缺点：多个文件引入会导致打包生成多个重复的代码
 * 2、防止重复：使用Entry dependencies 或者 SplitChunksPlugin 去重和分离chunk
 * 3、动态导入：通过模块的内联函数调用来分离代码
 */

module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js',

    // 配置dependOn option选项，能够在多个chunk质检共享模块
    // index: {
    //   import: './src/index.js',
    //   dependOn: 'shared'
    // },
    // another: {
    //   import: './src/another-module.js',
    //   dependOn: 'shared'
    // },
    // shared: 'lodash'
  }, // 打包入口
  output: {
    filename: '[name].bundle.js', // 输出文件的文件名
    // __dirname表示获取到我们当前的webpack.config.js文件所在的物理路径
    path: path.resolve(__dirname, './dist'), // 文件的输出路径
    clean: true, // 清理上一次打包遗留的文件
    // [contenthash] 根据文件的内容自动生成hash字符串文件名
    // [ext] 根据文件扩展名自动生成对应的扩展名
    assetModuleFilename: 'images/[contenthash][ext]' // 自己定义打包输出的文件路径文件名
  },
  mode: 'development', // development 开发模式  \  production 生产模式

  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // 指定文件模板生成对应文件
      filename: 'app.html', // 生成的文件名
      inject: 'body' // 自定义scripte标签的位置
    }),
    new MiniCssExtractPlugin(
      {
        filename: 'styles/[contenthash].css' // 指定将生成的mian.css文件生成到styles文件下
      }
    ) // 插件并不会将css加载到页面中，这里HtmlWebpackPlugin帮助我们自动生成link标签或者在创建index.html文件时使用link标签
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
            maxSize: 8 * 1024 // 8kb, 当大于8kb的时候走resource，否则危inline
          }
        }
      },
      // {
      //   test: /\.(css|less)$/,
      //   use: ['style-loader', 'css-loader', 'less-loader'] // 通过css-loader解析css文件，然后通过style-loader将解析后的内容渲染到页面上(此处先后顺序不能错误)
      // },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader']
      },
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse
        }
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse
        }
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse
        }
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-transform-runtime']
            ]
          }
        },
      }
    ]
  },
  optimization: {
    minimize: true, // 开发环境下启用css优化
    minimizer: [
      new CssMinimizerPlugin()
    ],
    splitChunks: { // 可以将公共的依赖模块提取到已有的入口chunk中，或者提取到一个新生成的chunk中
      chunks: 'all'
    }
  }
}