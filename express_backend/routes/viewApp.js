var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
	console.log ('Time', Date.now());
	next();
})

router.get('/shortAnswerDisplay', function(req, res, next) {
	console.log('Viewing SA Questions');
	res.locals.connection.connect();
 	res.locals.connection.query('SELECT * FROM Question WHERE qType="SA"', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
	res.locals.connection.end();
});

router.get('/multipleAnswerDisplay', function(req, res, next) {
	console.log('Viewing MC Questions');
	res.locals.connection.connect();
 	res.locals.connection.query('SELECT * FROM Question WHERE qType="MC"', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
	res.locals.connection.end();
});

module.exports = router;
