function MainCtrl($scope, API) {

  var init = function() {
    $scope.screenname = window.localStorage.screenname || '';
    $scope.user = null;
    $scope.latest_tweets = [];
    $scope.reputation_score = null;
  };


  var getProfileAndLatestTweets = function() {
    if ($scope.screenname === '') return;

    $.when(
      API.getUser($scope.screenname),
      API.getTweets($scope.screenname),
      API.getReputation($scope.screenname)
    )
    .done(function getTweeckrDataWithSuccess(user, tweets, reputation) {
      console.info('Done', arguments);

      $scope.$apply(function() {
        $scope.user = user[0].user;
        // just to get a bigger image
        $scope.user.profile_image_url = $scope.user.profile_image_url.replace('normal', '200x200');

        $scope.latest_tweets = tweets[0].latest_tweets;
        $scope.reputation_score = reputation[0].reputation_score;
      });
    })
    .fail(function(err) {
      console.error('Fail', err);
    });
  };


  $scope.check = function() {
    window.localStorage.screenname = $scope.screenname;
    getProfileAndLatestTweets();
  };


  init();
  getProfileAndLatestTweets();

}


angular
  .module('tweeckrApp')
  .controller('mainCtrl', MainCtrl);
