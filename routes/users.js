var _         = require('underscore');
var express   = require('express');
var router    = express.Router();
var async     = require('async');
var twitter   = require('../utils/twitter');


var computeReputationScore = function() {
  return 1337;
};


router.get('/:screenname', function(req, res, next) {
  twitter.get('users/show', {
    screen_name: req.params.screenname
  }, function(err, user) {
    if (err) return next(err);

    var twuser = _.omit(user, 'status');
    res.status(200).json({
      user: twuser
    });
  });
});


router.get('/:screenname/tweets', function(req, res, next) {
  twitter.get('statuses/user_timeline', {
    screen_name: req.params.screenname,
    count: 100,
    include_rts: false,
    trim_user: true
  }, function(err, tweets) {
    if (err) return next(err);

    var latest_tweets = _.map(tweets, function(t) {
      return _.omit(t, 'user');
    });
    res.status(200).json({
      latest_tweets: latest_tweets
    });
  });
});


router.get('/:screenname/reputation', function(req, res, next) {
  var score = computeReputationScore();

  res.status(200).json({
    reputation_score: score
  });
});


module.exports = router;
