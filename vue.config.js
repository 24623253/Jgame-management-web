'use strict'
const path = require('path')
const webpack = require('webpack')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const projectName = defaultSettings.title || 'Vue Element Backend'
/*
* node中通过 port = 9527 npm run dev OR npm run dev --port = 9527 改变端口
*/
const devPort = process.env.port || process.env.npm_config_port || 9527

module.exports = {
  publicPath: '/', // 根路径 cli3.0以上使用publicPath替代baseUrl,解决build后找不到静态资源的问题
  outputDir: 'dist', // 打包时生成的文件夹名称
  assetsDir: 'static', // 静态资源目录(js,css,img,fonts)这些文件都可以写里面
  lintOnSave: false, // 是否开启eslint保存检测 ,它的有效值为 true || false || 'error'
  productionSourceMap: false, // 打包文件加上索引，建议关闭，开启时生产环境可以看到源码
  devServer: {
    host: '0.0.0.0',
    port: devPort,
    open: false, // 启动项目后自动开启浏览器
    overlay: { // 将错误日志显示在html之上
      warning: false,
      error: true
    }
    // proxy: {}
  },
  configureWebpack: {
    name: projectName,
    resolve: {
      alias: {
        '@': resolve('src'),
        'views': resolve('src/views'),
        'components': resolve('src/components'),
        'mixins': resolve('src/mixins'),
        'api': resolve('src/api'),
        'utils': resolve('src/utils')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ]
  },

  chainWebpack(config) {
    config
      .plugin('define')
      .tap(args => {
        args[0]['process.env'].STARTTIME = JSON.stringify(new Date().toString())
        return args
      })

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
  }
}
