var config  = require('../config');
var Twit    = require('twit');

try {
  var twitter = new Twit(config.twitter);
} catch(err) {
  console.error('Please, provide Twitter access tokens in /config.js file');
  console.error('Details', err);
  process.exit(1);
}

module.exports = twitter;
