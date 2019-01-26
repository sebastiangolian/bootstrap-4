const fs = require('fs-extra');

console.log('Remove dist directory')
fs.removeSync('dist');