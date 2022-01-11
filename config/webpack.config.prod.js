const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') // 压缩css
const TerserPlugin = require('terser-webpack-plugin') // 压缩js

/**
 * 代码分离
 * 1、入口起点：使用entry配置手动地分离代码
 *    缺点：多个文件引入会导致打包生成多个重复的代码
 * 2、防止重复：使用Entry dependencies 或者 SplitChunksPlugin 去重和分离chunk
 * 3、动态导入：通过模块的内联函数调用来分离代码
 */

module.exports = {
  output: {
    filename: 'scripts/[name].[contenthash].js', // 输出文件的文件名
    publicPath: 'http://localhost:8080/' // 指定应用程序中所有资源的基础路径
  },
  mode: 'production', // development 开发模式  \  production 生产模式

  optimization: {
    // minimize: true, // 开发环境下启用代码优化（js/css都会被优化）
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ],
  },

  performance: { // 性能相关的配置
    hints: false // 去除性能提示
  }
}