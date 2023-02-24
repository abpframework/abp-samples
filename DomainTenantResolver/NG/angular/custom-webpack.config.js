var path = require('path');
var pachArr = __dirname.split(path.sep);
const fs = require('fs');

module.exports = {
  devServer: {
    server : {
      type: 'https',
      options: {
        pfx: fs.readFileSync(pachArr.slice(0, pachArr.length - 2).join(path.sep) + path.sep + 'getabp.net.pfx')
      }
    }
  }
}
