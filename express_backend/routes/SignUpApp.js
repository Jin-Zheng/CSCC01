var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
	console.log ('Time', Date.now())
	next()
})

router.get('/InstructorSignUp', function(req, res, next) {
	console.log('Creating instructor');
	res.locals.connection.connect();
	var usersSqlAdd = "INSERT INTO User (firstName, lastName, uType, username, password) VALUES ?";
	var values = [
		[''+req.body.firstName+'',''+req.body.lastName+'','Instructor', ''+req.body.username+'', ''+req.body.password+''],
	];
	res.locals.connection.connect();
	res.locals.connection.query(usersSqlAdd, [values], function (err, results, fields) {
		if (err) throw err;
			res.send(JSON.stringify(results));
		console.log(results);
	});
	res.locals.connection.end();
});

router.get('/StudentSignUp', function(req, res, next) {
	console.log('Creating student');
	res.locals.connection.connect();
	var usersSqlAdd = "INSERT INTO User (firstName, lastName, uType, username, password) VALUES ?";
	var values = [
		[''+req.body.firstName+'',''+req.body.lastName+'','Student', ''+req.body.username+'', ''+req.body.password+''],
	];
	res.locals.connection.connect();
	res.locals.connection.query(usersSqlAdd, [values], function (err, results, fields) {
		if (err) throw err;
			res.send(JSON.stringify(results));
		console.log(results);
	});
	res.locals.connection.end();
});

module.exports = router;
