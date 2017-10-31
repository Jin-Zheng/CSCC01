var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
	console.log ('Time', Date.now())
	next()
})

router.get('/deleteQuestion', function(req, res, next) {
	console.log('Deleting question with ID: ' + ''+req.body.qKey+'');
	res.locals.connection.connect();
 	res.locals.connection.query('DELETE FROM Question WHERE qKey = ' + ''+req.body.qKey+'', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
	res.locals.connection.end();
});

module.exports = router;
