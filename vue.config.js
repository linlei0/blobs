// vue.config.js 是一个可选的配置，也可以在package.json中使用vue来配置，那样就需要遵守更严格的json语法
// 3.打包生成文件配置
// 4.其他
const path = require('path')
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer')
// const utils = require('./utils')
var webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}
// 版本号
const version = process.env.VUE_APP_VERSION
module.exports = {
  // 部署生产环境和开发环境下的URL。
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
  // 例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 baseUrl 为 /my-app/。
  publicPath: '/',
  // outputDir: 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）
  outputDir: 'dist',

  // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: 'assets',

  // 指定生成的 index.html 的输出路径 (打包之后，改变系统默认的index.html的文件名)
  // indexPath: "myIndex.html",

  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
  filenameHashing: true,
  // 它支持webPack-dev-server的所有选项
  devServer: {
    host: '0.0.0.0',
    port: 8088, // 端口号
    https: false, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器
    hot: true,
    proxy: {
      '/api': {
        // target: 'http://192.168.1.34:3000/mock/25',
        target: 'http://192.168.1.34:83/api/',
        // target: 'http://192.168.110.2:8094/web-api/',  //王兵兵
        pathRewrite: {
          '^/api': ''
        }
      },
      '/file': {
        target: 'http://192.168.1.34:83/file',
        pathRewrite: {
          '^/file': ''
        }
      }
    }
  },
  // lintOnSave：{ type:Boolean default:true } 问你是否使用eslint，这个值会在 @vue/cli-plugin-eslint 被安装之后生效
  lintOnSave: false,
  configureWebpack: {
    output: {
      filename: 'assets/js/[name].' + version + '.[hash].js',
      chunkFilename: 'assets/js/[name].' + version + '.[hash].js'
    },
    resolve: {
      alias: {
        '@': resolve('src'),
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    performance: {
      hints:false
    }
  },
  css: {
    extract: {
      filename: `assets/css/[name].${version}.[hash].css`,
      chunkFilename: `assets/css/[name].${version}.[hash].css`
    }
  },
  // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例
  // 允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: config => {
    // svg配置
    // const svgRule = config.module.rule('svg')
    // svgRule.uses.clear()
    // svgRule.use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   })
    // config.module
    //   .rule('vue')
    //   .use('vue-loader')
    //   .loader('vue-loader')
    //   .tap(options => {
    //     // 修改它的选项...
    //     return options
    //   })
    // config.module
    //   .rule('images')
    //   .use('url-loader')
    //   .tap(options => {
    //     return {
    //       limit: 4096,
    //       fallback: {
    //         loader: 'file-loader',
    //         options: {
    //           name: `assets/img/[name].${version}.[ext]`
    //         }
    //       }
    //     }
    //   })
    if (process.env.VUE_APP_ANALYZER === true) {
      config.plugin('webpack-bundle-analyzer')
        .use(BundleAnalyzerPlugin)
    }

    // 使用ProvidePlugin
    config.plugin('provide')
      .use(webpack.ProvidePlugin, [{
        'AlloyLever': 'AlloyLever'
      }])
  },

  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  // 打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
  // map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
  // 有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
  productionSourceMap: false
}

