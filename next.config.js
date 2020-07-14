const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const cssLoaderGetLocalIdent = require('css-loader/lib/getLocalIdent.js');
module.exports =withPlugins([withCSS({
	cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
		localIdentName: "[local]___[hash:base64:5]",
		getLocalIdent: (context, localIdentName, localName, options) => {
			const hz = context.resourcePath.replace(context.rootContext, '');
			if (/node_modules/.test(hz)) {
				return localName;
			}
			return cssLoaderGetLocalIdent(context, localIdentName, localName, options);
		},
  }
}),],{
	pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
	distDir: 'build',
	webpack(config,options){
		
	}
}) 