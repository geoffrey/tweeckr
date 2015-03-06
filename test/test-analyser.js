var should    = require('should');
var assert    = require('assert');
var Analyser  = require('../utils/Analyser');

describe('Tweet Analyser', function() {

  describe('Analyse a word', function(){
    it('should analyse a positive word as positive', function(done){
      Analyser.getWeightForWord('positive').should.equal(1);
      done();
    });

    it('should analyse a negative word as negative', function(done){
      Analyser.getWeightForWord('negative').should.equal(-1);
      done();
    });

    it('should not analyse non strings', function(done){
      Analyser.getWeightForWord(1337).should.equal(0);
      Analyser.getWeightForWord({ foo: 'bar' }).should.equal(0);
      Analyser.getWeightForWord([]).should.equal(0);
      Analyser.getWeightForWord(undefined).should.equal(0);
      done();
    });

  });


  describe('Analyse a tweet', function(){
    it('should analyse a positive tweet', function(done){
      Analyser.getWeightForTweet('This is an awesome tweet!').should.equal(1);
      done();
    });

    it('should analyse a negative tweet', function(done){
      Analyser.getWeightForTweet('This is an bad tweet!').should.equal(-1);
      done();
    });

    it('should not analyse non strings', function(done){
      Analyser.getWeightForTweet(1337).should.equal(0);
      Analyser.getWeightForTweet({ foo: 'bar' }).should.equal(0);
      Analyser.getWeightForTweet([]).should.equal(0);
      Analyser.getWeightForTweet(undefined).should.equal(0);
      done();
    });

  });

});
