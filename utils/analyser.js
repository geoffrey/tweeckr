var _ = require('underscore');

var negativeWords = require('../data/negative-words');
var positiveWords = require('../data/positive-words');

var Analyser = {

  /**
   *  Get a sentiment score for a tweet
   *  A tweet sentiment score is the sum of each word's sentiment score
   */
  getWeightForTweet: function(tweet) {
    if (!_.isString(tweet)) {
      return 0;
    }

    var words = tweet.split(' ');
    return _.reduce(words, function(memo, w){
      return memo + Analyser.getWeightForWord(w);
    }, 0);
  },


  /**
   *  Get a sentiment score for a word
   *  If the word is positive, return 1
   *  If the word is negative, return -1
   *  else return 0
   */
  getWeightForWord: function(word) {
    if (!_.isString(word)) {
      return 0;
    }

    var lowerWord = word.toLowerCase();

    if (_.contains(positiveWords, lowerWord)) {
      return 1;
    }

    if (_.contains(negativeWords, lowerWord)) {
      return -1;
    }

    return 0;
  }
}


module.exports = Analyser;
