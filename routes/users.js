var express   = require('express');
var router    = express.Router();

var twitter   = require('../utils/twitter');


router.get('/:screenname', function(req, res, next) {

  twitter.get('users/show', {
    screen_name: req.params.screenname
  }, function(err, data, response) {
    if (err) {
      return res
      .status(err.statusCode)
      .json({
        code: err.statusCode,
        message: err.message
      });
    }

    res.status(200).json(data);
  });

});


module.exports = router;
