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

// connection.query('CREATE TABLE Question (qKey INTEGER AUTO_INCREMENT PRIMARY KEY, qType VARCHAR(20) NOT NULL, Qvalue VARCHAR(9999) NOT NULL, answer VARCHAR(9999) NOT NULL, candidate1 VARCHAR(9999), candidate2 VARCHAR(9999), candidate3 VARCHAR(9999), candidate4 VARCHAR(9999))', function (error, results, fields) {
//   if (error) throw error;
//   for (var i = 0; i < results.length; i++) {
//       console.log(results[i]);
// }
// })

//connection.query('describe Question', function (error, results, fields) {
//  if (error) throw error;
//  console.log(results)
//})

connection.query('show tables', (error, results, fields) => {
  if(error) throw error;
  console.log(results)
})


connection.end()
