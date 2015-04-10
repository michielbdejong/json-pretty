var fs = require('fs'),
  jsonPretty = require('./index.js');

fs.writeFileSync('package.json', jsonPretty(JSON.parse(fs.readFileSync('package.json'))));
