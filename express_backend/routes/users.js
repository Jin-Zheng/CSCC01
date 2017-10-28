var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
	console.log('Querying db');
 	res.locals.connection.query('SELECT * FROM Question', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
});

module.exports = router;
