var express = require('express');
var router = express.Router();
const pool = require('./../database/usingPg');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/fetch', function (req, res) {
  pool.query('Select * From "Users"', (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

module.exports = router;
