module.exports = (config) => {
    var path = require('path');
    var pachArr = __dirname.split(path.sep);
    config.devServer.pfx = pachArr.slice(0, pachArr.length - 2).join(path.sep) + path.sep + 'getabp.net.pfx';
    return config;
};
