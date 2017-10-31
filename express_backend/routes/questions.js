var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
	console.log ('Time', Date.now())
	next()
})

router.get('/questions', function(req, res, next) {
	console.log('Viewing all Questions');
	res.locals.connection.connect();
 	res.locals.connection.query('SELECT * FROM Question', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
	res.locals.connection.end();
});

module.exports = router;
