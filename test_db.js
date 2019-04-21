var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localserver',
  user     : 'root',
  password : 'password',
  database : 'open_paas'
});
 
connection.connect();

var  sql = 'SELECT username FROM bkaccount_bkuser';

// username + password
// select *  from bkaccount_bkuser where username='admin'
var sql = "select password  from bkaccount_bkuser where username='admin'"
// var sql = "select password  from bkaccount_bkuser where username='sss'"

//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result.length);
       if(result.length == 0) {
          console.log("no entry");
       } else {
         console.log("user already have");
         console.log(result[0].user)
       }
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();