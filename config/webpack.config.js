const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.config.common.js')
const devConfig = require('./webpack.config.dev.js')
const prodConfig = require('./webpack.config.prod.js')

module.exports = (env) => {
  switch (true) {
    case env.production:
      return merge(commonConfig, prodConfig)
    case env.development:
      return merge(commonConfig, devConfig)
    default:
      throw new Error('No matching configuration was found!')
  }
}