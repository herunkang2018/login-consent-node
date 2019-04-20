var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localserver',
  user     : 'root',
  password : 'password',
  database : 'open_paas'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

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
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();