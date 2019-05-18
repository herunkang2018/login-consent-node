var fs = require('fs')
  , ini = require('ini')

var conf_file = process.env.CONF_FILE
console.log("[INFO] ENV CONF_FILE:", conf_file)
var config = ini.parse(fs.readFileSync(conf_file, 'utf-8'))

/*
const config = {  
    login_remember: conf.remember.login_remember,
    consent_remember: conf.remember.consent_remember,    
    server: {
      port: conf.server.port,
      hydra_admin_url: conf.server.hydra_admin_url
    },
    database: {
      host: conf.database.host,
      user: conf.database.user,
      password: conf.database.password,
      database: conf.database.database
    }
    // ...
  }
  */
  
  module.exports = config