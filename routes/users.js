var _         = require('underscore');
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
        screen_name: screenname,
        count: 100,
        include_rts: false,
        trim_user: true
      }, cb);
    }
  }, function(err, results) {
    if (err) return next(err);

    // Trim response data to reduce payload
    var user = _.omit(results.user[0], 'status');
    var latest_tweets = _.map(results.latest_tweets[0], function(t) {
      return _.omit(t, 'user');
    });

    res.status(200).json({
      user: user,
      latest_tweets: latest_tweets
    });
  });
});


module.exports = router;
