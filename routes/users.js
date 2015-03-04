var express   = require('express');
var router    = express.Router();


router.get('/:screenname', function(req, res, next) {
  res.status(200).json(req.params);
});


module.exports = router;
