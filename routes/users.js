var _         = require('underscore');
var express   = require('express');
var router    = express.Router();
var async     = require('async');
var twitter   = require('../utils/twitter');
var Analyser  = require('../utils/analyser');

var computeReputationScore = function() {
  return 1337;
};


router.get('/:screenname', function(req, res, next) {
  twitter.get('users/show', {
    screen_name: req.params.screenname
  }, function(err, user) {
    if (err) return next({ status: err.statusCode });

    var twuser = _.omit(user, 'status');
    var userReputationScore = twuser.followers_count;

    res.status(200).json({
      user: twuser,
      user_reputation_score: userReputationScore
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
    if (err) return next({ status: err.statusCode });

    var latest_tweets = _.map(tweets, function(t) {
      return _.omit(t, 'user');
    });

    var tweetsReputationScore = 0;
    _.each(latest_tweets, function(t) {
      t.reputation_score = Analyser.getWeightForTweet(t.text);
      tweetsReputationScore += t.reputation_score;
    });

    res.status(200).json({
      latest_tweets: latest_tweets,
      tweets_reputation_score: tweetsReputationScore
    });
  });
});


module.exports = router;
