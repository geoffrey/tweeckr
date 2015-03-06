function MainCtrl($scope, API) {

  var init = function() {
    $scope.screenname = window.localStorage.screenname || '';
    $scope.user = null;
    $scope.latest_tweets = [];
    $scope.reputation_score = null;
    $scope.apiError = null;
  };


  var getProfileAndLatestTweets = function() {
    init();

    if ($scope.screenname === '') return;

    $.when(
      API.getUser($scope.screenname),
      API.getTweets($scope.screenname)
    )
    .done(function getTweeckrDataWithSuccess(user, tweets) {
      console.info('Done', arguments);

      $scope.$apply(function() {
        $scope.user = user[0].user;
        // just to get a bigger image
        $scope.user.profile_image_url = $scope.user.profile_image_url.replace('normal', '200x200');

        $scope.latest_tweets = tweets[0].latest_tweets;
        $scope.reputation_score = tweets[0].tweets_reputation_score +
          user[0].user_reputation_score;
      });
    })
    .fail(function(err) {
      console.error('Fail', err);

      var error;
      switch (err.status) {
        case 404:
          error = 'This user does not exist.';
          break;
        case 401:
          error = 'This user\'s tweets are private.';
          break;
        default:
          error = 'Oops something unexpected happened. Please try again.';
      }

      $scope.$apply(function() {
        init();
        $scope.apiError = error;
      });
    });
  };


  $scope.check = function() {
    window.localStorage.screenname = $scope.screenname;
    getProfileAndLatestTweets();
  };


  getProfileAndLatestTweets();
}


angular
  .module('tweeckrApp')
  .controller('mainCtrl', MainCtrl);
