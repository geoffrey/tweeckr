var _ = require('underscore');

var negativeWords = require('../data/negative-words');
var positiveWords = require('../data/positive-words');

var Analyser = {

  getWeightForTweet: function(tweet) {
    if (!_.isString(tweet)) {
      return 0;
    }

    var words = tweet.split(' ');
    var weight = 0;

    _.each(words, function(w) {
      weight += Analyser.getWeightForWord(w);
    });

    return weight;
  },


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
