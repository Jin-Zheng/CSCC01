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

//connection.query('CREATE TABLE Question (qKey INTEGER AUTO_INCREMENT PRIMARY KEY, qType VARCHAR(20) NOT NULL, Qvalue VARCHAR(9999) NOT NULL, answer VARCHAR(9999) NOT NULL, candidate1 VARCHAR(9999), candidate2 VARCHAR(9999), candidate3 VARCHAR(9999), candidate4 VARCHAR(9999))', function (error, results, fields) {
//   if (error) throw error;
//   for (var i = 0; i < results.length; i++) {
//       console.log(results[i]);
// }
// })

connection.query('describe Question', function (error, results, fields) {
  if (error) throw error;
  console.log(results)
  
})

  // INSERT QUESTION
  // Example Add:
  var sqladd = "INSERT INTO Question (qKey, qType, Qvalue, answer, candidate1, candidate2, candidate3, candidate4) VALUES ?";
  var values = [
    ['1', 'MC', 'What is the correct answer?', '1', '1', '2', '3', '4'],
  ];
  connection.query(sqladd, [values], function (err, result) {
    if (err) throw err;
    // console.log("Number of records deleted: " + result.affectedRows);
  });
  
  // SELECT QUESTION
  // Example Select:
  connection.query("SELECT * FROM Question", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  
  // DELETE QUESTION
  // Example Delete:
  var sqldelete = "DELETE FROM Question WHERE qKey = '1'";
  var sqlclear = "truncate Question";
  connection.query(sqldelete, function (err, result) {
    if (err) throw err;
    // console.log("Number of records deleted: " + result.affectedRows);
  });
  

connection.end()