const ghpages = require('gh-pages');
const fs = require('fs-extra');

console.log("Copy index.html file to dist");
fs.copySync('index.html', 'dist/index.html');

console.log("Publish dist in gh-pages");
ghpages.publish('dist');