'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const { name } = require('./package.json')
const dev = process.env.NODE_ENV === 'development'

const port = process.env.port || process.env.npm_config_port || 8001 // dev port
module.exports = {
  publicPath: dev ? `//localhost:${port}` : '/', 
  assetsDir: 'static',
  lintOnSave: dev,
  productionSourceMap: false,  
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }, 
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'development') {
      config.optimization = {
        splitChunks: {
          cacheGroups: {            
            runtimeChunk: {
                name: 'manifest'
            }
          }
        }        
      }
    }
  },
  chainWebpack:config => {   
    //config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test    
    config.optimization.minimize(true)    
    config.resolve.alias
    .set('@',resolve('src'))
    .set('src',resolve('src'))
    // .set('@/assets',resolve('src/assets'))
    
    config   
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('eval-source-map')
      )
  }
}
