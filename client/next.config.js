const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    /* my next config */
    cssLoaderOptions: {
        url: false
    },
    webpack(config, options) {
        config.module.rules.push({
            // test: /\.mdx/,
            // use: [
            //     options.defaultLoaders.babel,
            //     {
            //         loader: '@mdx-js/loader',
            //         options: pluginOptions.options,
            //     },
            // ],
            // vendor: [
            //     'xlsx',
            //     'file-saver'
            // ],
            node: { fs: 'empty' },
            // externals: [
            //     { './cptable': 'var cptable' },
            //     { './jszip': 'jszip' }
            // ]
        })
        return config
    }
})
