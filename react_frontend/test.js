const mysql = require('mysql')
//console.log(mysql)
var connection = mysql.createConnection({
  host     : 'weebwork.c4juqjnoarlo.us-east-2.rds.amazonaws.com',
  user     : 'challenger',
  password : 'onewsheyelai',
  database : 'challengerDb1',
  port: '3306'
})

connection.connect()
  console.log('Connected!')

   connection.query("", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

connection.end()
