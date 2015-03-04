var express   = require('express');
var router    = express.Router();
var async     = require('async');

var twitter   = require('../utils/twitter');


router.get('/:screenname', function(req, res, next) {
  var screenname = req.params.screenname;
  async.parallel({
    user: function(cb) {
      twitter.get('users/show', {
        screen_name: screenname
      }, cb);
    },
    latest_tweets: function(cb) {
      twitter.get('statuses/user_timeline', {
        screen_name: screenname
      }, cb);
    }
  }, function(err, results) {
    if (err) {
      return res.status(err.statusCode).json({
        code: err.statusCode,
        message: err.message
      });
    }

    res.status(200).json({
      user: results.user[0],
      latest_tweets: results.latest_tweets[0]
    });
  });
});


module.exports = router;
