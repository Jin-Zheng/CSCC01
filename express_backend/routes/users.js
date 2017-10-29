var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
	res.locals.connection.connect();
	console.log('Querying db');
 	res.locals.connection.query('SELECT * FROM Question', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
	res.locals.connection.end();
});

module.exports = router;
