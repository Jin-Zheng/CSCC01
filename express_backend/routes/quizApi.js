var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
	console.log ('Time', Date.now());
	next();
})

router.get('/quizContents/get/:id', function(req, res, next) {
	console.log('Viewing questions from quiz with id: ' + req.params.id)
	res.locals.connection.connect()
	res.locals.connection.query('SELECT * FROM QuizContents WHERE quizKey = ' + req.params.id, function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
	res.locals.connection.end()
})

router.get('/quiz/insert', function(req, res, next) {
	console.log('Creating a new quiz:')
	var sqladd = 'INSERT INTO Quiz (quizName, quizCreator) VALUES ?';
	var values = [
		[req.body.quizName, req.body.quizCreator],
	];
	res.locals.connection.connect()
	res.locals.connection.query(sqladd, [values], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
	res.locals.connection.end()
})

router.get('/quiz/update/:id', function(req, res, next) {
	console.log('Updating quiz with id:' + req.params.id)
	var sqlupdate = 'UPDATE Quiz SET quizName = "' + req.body.quizName + '", quizCreator = "' + req.body.quizCreator + '" WHERE quizKey = ' + req.params.id;
	res.locals.connection.connect()
	res.locals.connection.query(sqlupdate, function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
	res.locals.connection.end()
})

router.get('/quiz/delete', function(req, res, next) {
	console.log('Deleting quiz with id :' + req.params.id)
	res.locals.connection.connect()
	res.locals.connection.query('DELETE FROM Quiz WHERE quizKey = ' + req.params.id, function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
	res.locals.connection.query('DELETE FROM Quiz WHERE quizId = ' + req.params.id, function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
	res.locals.connection.end()
})

router.get('/quizContents/insert/:id', function(req, res, next) {
	console.log('Adding question into quiz with id: ' + req.params.id)
	var sqladd = 'INSERT INTO QuizContents (quizId, questionId) VALUES ?';
	var values = [
		[req.body.id, req.body.questionId],
	];
	res.locals.connection.connect()
	res.locals.connection.query(sqladd, [values], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
	res.locals.connection.end()
})

router.get('/quizContents/delete/:id', function(req, res, next) {
	console.log('Deleting question with id ' + req.params.questionId + ' from quiz with id: ' + req.params.id)
	res.locals.connection.connect()
	res.locals.connection.query('DELETE FROM Quiz WHERE quizId = ' + req.params.id + ' AND questionId = ' + req.params.questionId, function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
	res.locals.connection.end()
})

module.exports = router
