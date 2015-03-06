var should  = require('should');
var assert  = require('assert');
var request = require('supertest');
var app     = require('../app');

describe('Tweeckr API', function() {

  describe('GET /users/:screenname', function(){
    it('should get an existing user', function(done){
      request(app)
      .get('/users/geoffrey___')
      .expect(200)
      .end(function(err, res) {
        res.body.user
        .should.have.property('screen_name')
        .which.eql('geoffrey___');

        done();
      });
    });

    it('should not get a non existing user', function(done){
      request(app)
      .get('/users/-')
      .expect(404, done);
    });
  });


  describe('GET /users/:screenname/tweets', function(){
    it('should get tweets of an existing user', function(done){
      request(app)
      .get('/users/geoffrey___/tweets')
      .expect(200)
      .end(function(err, res) {
        res.body.latest_tweets
        .should.be.instanceof(Array);

        done();
      });
    });

    it('should not get tweets from a non existing user', function(done){
      request(app)
      .get('/users/-/tweets')
      .expect(404, done);
    });

    it('should not get tweets from a user who has protected tweets', function(done){
      request(app)
      .get('/users/geof/tweets')
      .expect(401, done);
    });
  });

});
