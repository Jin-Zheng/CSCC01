var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
	console.log ('Time', Date.now())
	next()
})

router.get('/editMC', function(req, res, next) {
	console.log('Editing question with ID: ' + ''+req.body.qKey+'');
	res.locals.connection.connect();
	var sqlupdate = "UPDATE Question SET qValue = " + ''+req.body.qValue+'' + ", answer = " + ''+req.body.answer+'' + ", candidate1 = " ''+req.body.candidate1+'' + ", candidate2 = " ''+req.body.candidate2+'' + ", candidate3 = " ''+req.body.candidate3+'' + ", candidate4 = " ''+req.body.candidate4+'' + " WHERE qKey = " + ''+req.body.qKey+'';
 	res.locals.connection.query(sqlupdate, function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify(results));
		console.log(results);
	});
	res.locals.connection.end();
});

router.get('/editSA', function(req, res, next) {
	console.log('Editing question with ID: ' + ''+req.body.qKey+'');
	res.locals.connection.connect();
	var sqlupdate = "UPDATE Question SET qValue = " + ''+req.body.qValue+'' + ", answer = " + ''+req.body.answer+'' + " WHERE qKey = " + ''+req.body.qKey+'';
 	res.locals.connection.query(sqlupdate, function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify(results));
		console.log(results);
	});
	res.locals.connection.end();
});

module.exports = router;
