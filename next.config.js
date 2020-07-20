const withPlugins = require('next-compose-plugins');
const path = require('path');
// css 相关配置
const withCSS = require('@zeit/next-css');
const cssLoaderGetLocalIdent = require('css-loader/lib/getLocalIdent.js');
const cssPage = [
  withCSS,
  {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]',
      getLocalIdent: (context, localIdentName, localName, options) => {
        const hz = context.resourcePath.replace(context.rootContext, '');
        if (/node_modules/.test(hz)) {
          return localName;
        }
        return cssLoaderGetLocalIdent(
          context,
          localIdentName,
          localName,
          options
        );
      },
    },
  },
];

// 图片相关
const withImages = require('next-images');
const imagePage = [
  withImages,
  {
    inlineImageLimit: 16384,
  },
];

// 打包消除生产环境debug
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// styleint
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = withPlugins([cssPage, imagePage], {
  pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
  distDir: 'build',
  webpack(config, options) {
    config.optimization.minimizer.push(
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_debugger: true,
            drop_console: true,
          },
        },
      })
    );
    // styleint
    config.plugins.push(
      new StylelintPlugin({
        files: ['**/*.{c,sc,le}ss'],
      })
    );
    return config;
  },
});
