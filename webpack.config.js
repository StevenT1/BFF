const path = require('path');
const { argv } = require('yargs');
const { merge } = require('webpack-merge');
const glob = require('glob');
//打包环境查找
const mode = argv.mode;
const envConfig = require(`./build/webpack.${mode}.js`)
const files = glob.sync('./scr/web/views/**/*.entry.js')
console.log(files)
const entrys = {};
files.forEach(url => {
    if (/([a-zA-Z]+-[a-zA-Z]+)\.entry\.js$/.test(url)) {
        const entryKey = RegExp.$1;
        const [pageName, cationName] = entryKey.split('-');
        entrys[entryKey] = `./scr/web/views/${pageName}/${entryKey}.entry.js`;
    }
})
const baseConfig = {
    mode,
    entry: entrys,
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, './dist/assets')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use:['babel-loader']
            },

        ]
    }
};
module.exports = merge(baseConfig, envConfig)