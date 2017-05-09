var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({'user':'Ragnar', 'universidad':'UPTC'});
});

module.exports = router;
