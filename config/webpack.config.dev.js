
/**
 * 代码分离
 * 1、入口起点：使用entry配置手动地分离代码
 *    缺点：多个文件引入会导致打包生成多个重复的代码
 * 2、防止重复：使用Entry dependencies 或者 SplitChunksPlugin 去重和分离chunk
 * 3、动态导入：通过模块的内联函数调用来分离代码
 */

module.exports = {
  output: {
    filename: 'scripts/[name].js', // 输出文件的文件名
  },
  mode: 'development', // development 开发模式  \  production 生产模式

  devtool: 'inline-source-map',

  devServer: {
    static: './dist'
  },

}