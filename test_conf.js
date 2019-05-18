var fs = require('fs')
  , ini = require('ini')

var conf_file = process.env.CONF_FILE
var config = ini.parse(fs.readFileSync(conf_file, 'utf-8'))

console.log(config)
console.log(config.scope)