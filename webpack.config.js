var path = require('path');

module.exports = {
    entry: './.transpiled/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'isdirty-isnew-vuexorm-plugin',
        libraryTarget: 'umd'
    }
};
