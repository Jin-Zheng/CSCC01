var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
	console.log ('Time', Date.now());
	next();
})


router.get('/questions/get/all', (res, req, next) => {
  console.log('get all questions')
  res.locals.connection.connect()
  const sql = 'SELECT * FROM Question'
  res.locals.connection.query(sql, (err, results, fields) => {
    res.send(JSON.Stringify(results))
  })
  res.locals.connection.end
})

router.get('/', function(req, res, next) {
	console.log('Viewing all questions')
	res.locals.connection.connect()
	res.locals.connection.query('SELECT * FROM Question', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify(results));
	});
	res.locals.connection.end()
})

module.exports = router
