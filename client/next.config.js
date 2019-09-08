const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname,'./assets/antd-custom.less'), 'utf8')
)
if(typeof require !== 'underfined'){
    require.extensions['.less'] = file => {}
}
module.exports = withLess({
    cssModules: true,
    lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: themeVariables
    }
})
// module.exports = withCSS({/* my next config */})