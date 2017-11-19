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
  // DESCRIPTION OF ALL TABLES
  // Question:
   connection.query('describe Question', function (error, results, fields) {
    if (error) throw error;
    console.log("Question:")
    console.log(results)
  });

  connection.query('describe User', function (error, results, fields) {
   if (error) throw error;
     console.log("\nUser:")
   console.log(results)
  });

  connection.query('describe Quiz', function (error, results, fields) {
   if (error) throw error;
     console.log("\nQuiz:")
   console.log(results)
  });


  connection.query('describe QuizContents', function (error, results, fields) {
   if (error) throw error;
     console.log("\nQuizContents:")
   console.log(results)
  });

  connection.query('describe Attempt', function (error, results, fields) {
   if (error) throw error;
     console.log("\nAttempt:")
   console.log(results)
  });

  connection.query('describe AttemptContents', function (error, results, fields) {
   if (error) throw error;
     console.log("\nAttemptContents:")
   console.log(results)
  });

//connection.query('CREATE TABLE Question (qKey INTEGER AUTO_INCREMENT PRIMARY KEY, qType VARCHAR(20) NOT NULL, Qvalue VARCHAR(9999) NOT NULL, answer VARCHAR(9999) NOT NULL, candidate1 VARCHAR(9999), candidate2 VARCHAR(9999), candidate3 VARCHAR(9999), candidate4 VARCHAR(9999))', function (error, results, fields) {
//   if (error) throw error;
//   for (var i = 0; i < results.length; i++) {
//       console.log(results[i]);
// }
// })

// CREATE USERS TABLE
// connection.query('CREATE TABLE User (qKey INTEGER AUTO_INCREMENT PRIMARY KEY, qType VARCHAR(20) NOT NULL, firstName VARCHAR(9999) NOT NULL, lastName VARCHAR(9999) NOT NULL, lastModified VARCHAR(9999) NOT NULL, email VARCHAR(9999), username VARCHAR(9999), password VARCHAR(9999)), lastAccessed VARCHAR(9999)', function (error, results, fields) {
//   if (error) throw error;
//   for (var i = 0; i < results.length; i++) {
//       console.log(results[i]);
// }
// })

//connection.query('describe Question', function (error, results, fields) {
//  if (error) throw error;
//  console.log(results)
//})
//
// connection.query('show tables', (error, results, fields) => {
//   if(error) throw error;
//   console.log(results)
//   console.log("\n SQL Queries:\n")
// connection.end()

  // INSERT QUESTION
  // Example Add:
  // var sqladd = "INSERT INTO Question (qType, qValue, answer, candidate1, candidate2, candidate3, candidate4) VALUES ?";
  // var values = [
  //   ['MC', 'What is the correct answer?', '1', '1', '2', '3', '4'],
  // ];
  // connection.query(sqladd, [values], function (err, result) {
  //   if (err) throw err;
  //   // console.log("Number of records deleted: " + result.affectedRows);
  // });

  // // SELECT QUESTION
  // // Example Select:
  // connection.query("SELECT * FROM Question", function (err, result, fields) {
  //   if (err) throw err;
	// console.log("\nViewing Database:\n");
  //   console.log(result);
  // });

  // // UPDATE QUESTION
  // // Example update question 1:
  // var sqlupdate = "UPDATE Question SET Qvalue = 'New Question?' WHERE qKey = 1";
  // // Use the query
  // connection.query(sqlupdate, function (err, result) {
  // console.log("\n-Updating Q1-\n");
  //   if (err) throw err;
  // });
  //
  // // View the question again
  // connection.query("SELECT * FROM Question", function (err, result, fields) {
  // console.log("Viewing Database:\n");
  //   if (err) throw err;
  //   console.log(result);
  // });

  // DELETE QUESTION
  // Example Delete:
  var sqldelete = "DELETE FROM Question WHERE qKey = '1'";
  // sqlclear clears database completely
  var sqlclear = "truncate Question";
  // connection.query(sqlclear, function (err, result) {
  //   if (err) throw err;
  //   // console.log("Number of records deleted: " + result.affectedRows);
  // });

  // CREATE USERS TABLE
  // var sqlUser = "CREATE TABLE User (uKey INTEGER AUTO_INCREMENT PRIMARY KEY, uType VARCHAR(20) NOT NULL, firstName VARCHAR(255) NOT NULL, lastName VARCHAR(255) NOT NULL, lastModified VARCHAR(255) NOT NULL, email VARCHAR(255), username VARCHAR(255), password VARCHAR(255), lastAccessed VARCHAR(255))";
  //   connection.query(sqlUser, function (error, results, fields) {
  //   if (error) throw  error;
  // });

  // DELETE OLD USERS TABLE
  // var delsqlUser = "DROP TABLE User";
  //   connection.query(delsqlUser, function (error, results, fields) {
  //   if (error) throw  error;
  // });

  // Testing User Queries
  // Example Add:
  // var usersSqlAdd = "INSERT INTO User (firstName, lastName) VALUES ?";
  // var userValues = [
  //   ['John', 'Smith']
  // ];
  // connection.query(usersSqlAdd, [userValues], function (err, result) {
  //   if (err) throw err;
  //   // console.log("Number of records deleted: " + result.affectedRows);
  // });
  //
  // // Example View:
  // // View the question again
  // connection.query("SELECT * FROM User", function (err, result, fields) {
  //   console.log("\nViewing User Database:\n");
  //   if (err) throw err;
  //   console.log(result);
  // });

  // var sqlUserClear = "truncate User";
  // connection.query(sqlUserClear, function (err, result) {
  //   if (err) throw err;
  //   // console.log("Number of records deleted: " + result.affectedRows);
  // });

  // CREATE QUIZ TABLE
  // NOTE: questionIds is a list of question ids in the quiz, separated by commas
  // var sqlQuiz = "CREATE TABLE Quiz (quizKey INTEGER AUTO_INCREMENT PRIMARY KEY, questionIds VARCHAR(255) NOT NULL, quizCreator VARCHAR(255))";
  //   connection.query(sqlQuiz, function (error, results, fields) {
  //   if (error) throw  error;
  // });

 //  connection.query('describe Quiz', function (error, results, fields) {
 //   if (error) throw error;
 //   console.log(results)
 // });



 // CREATE ATTEMPTS TABLE
 // NOTE: answers is a list of answer values in the quiz, separated by !
 // var sqlAttempts = "CREATE TABLE Attempt (attemptKey INTEGER AUTO_INCREMENT PRIMARY KEY, studentUsername VARCHAR(255) NOT NULL, answers VARCHAR(9999) NOT NULL, grade DOUBLE(5,2))";
 //   connection.query(sqlAttempts, function (error, results, fields) {
 //   if (error) throw  error;
 // });

 // connection.query('describe Attempt', function (error, results, fields) {
 //  if (error) throw error;
 //  console.log(results)
 // })


 // // Testing Attempt Queries
 // // Example Add:
 // var attemptSqlAdd = "INSERT INTO Attempt (studentUsername, answers, grade) VALUES ?";
 // var attemptValues = [
 //   ['sohee101', '2!1!3!42.45!', 82.50]
 // ];
 // connection.query(attemptSqlAdd, [attemptValues], function (err, result) {
 //   if (err) throw err;
 //   // console.log("Number of records deleted: " + result.affectedRows);
 // });
 //
 // // Example View:
 // // View the Attempts
 // connection.query("SELECT * FROM Attempt", function (err, result, fields) {
 //   console.log("\nViewing User Database:\n");
 //   if (err) throw err;
 //   console.log(result);
 // });

 // Change QUIZ TABLE
 // var sqlQuizCol = "ALTER TABLE Quiz CHANGE `questionIds` `quizName` VARCHAR(255)";
 //   connection.query(sqlQuizCol, function (error, results, fields) {
 //   if (error) throw  error;
 // });

 // CREATE QuizContents TABLE
 // var sqlQuiz = "CREATE TABLE QuizContents (quizId INTEGER NOT NULL, questionId INTEGER NOT NULL)";
 //   connection.query(sqlQuiz, function (error, results, fields) {
 //   if (error) throw  error;
 // });


 // Change Attempt TABLE
 // var sqlQuizCol = "ALTER TABLE Attempt DROP answers";
 //   connection.query(sqlQuizCol, function (error, results, fields) {
 //   if (error) throw  error;
 // });

  //  connection.query('describe AttemptContents', function (error, results, fields) {
  //   if (error) throw error;
  //   console.log(results)
  // });

  // CREATE AttemptContents TABLE
  // var sqlQuiz = "CREATE TABLE AttemptContents (attemptId INTEGER NOT NULL, questionId INTEGER NOT NULL, answer VARCHAR(9999) NOT NULL)";
  //   connection.query(sqlQuiz, function (error, results, fields) {
  //   if (error) throw  error;
  // });

  // ADD quiz
  // var sqladd = 'INSERT INTO QuizContents (quizId, questionId) VALUES ?';;
	// var values = [
	// 	[2, 5],
	// ];
  // connection.query(sqladd, [values], function (err, result) {
  //   if (err) throw err;
  //   // console.log("Number of records deleted: " + result.affectedRows);
  // });


  // connection.query('SELECT Quiz.quizName, Quiz.quizCreator, Question.qKey, Question.qValue, Question.qType, Question.answer, Question.candidate1, Question.candidate2, Question.candidate3, Question.candidate4 ' +
	// 'FROM Quiz JOIN QuizContents ' +
	// 'ON Quiz.quizKey = QuizContents.quizId ' +
	// 'JOIN Question ON QuizContents.questionId = Question.qKey', function (err, result) {
  //   if (err) throw err;
  //   // console.log("Number of records deleted: " + result.affectedRows);
  //   console.log(result);
  // });
  //
  //
  // var sqlview =
	// 'SELECT Attempt.studentUsername, Attempt.grade, AttemptContents.answer AS studentAnswer, Question.qKey, Question.qValue, Question.qType, Question.answer, Question.candidate1, Question.candidate2, Question.candidate3, Question.candidate4 ' +
	// 'FROM Attempt JOIN AttemptContents ' +
	// 'ON Attempt.attemptKey = AttemptContents.attemptId ' +
	// 'JOIN Question ON AttemptContents.questionId = Question.qKey ' +
	// 'WHERE Attempt.attemptKey = ' + 2;
  // connection.query(sqlview, function (err, result, fields) {
  //   console.log("\nViewing Attempt Database:\n");
  //   if (err) throw err;
  //   console.log(result);
  // });
connection.end()
