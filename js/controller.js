function MainCtrl($scope, $location, API) {

  // Init screenname from path or localStorage or default
  $scope.screenname = $location.path().substr(1) || window.localStorage.screenname || 'geoffrey___';
  $location.path($scope.screenname);

  // Init filters
  $scope.minRetweets = 0;
  $scope.minStars = 0;
  $scope.picturesOnly = false;


  // Init fetched data
  var init = function() {
    $scope.user = null;
    $scope.latest_tweets = [];
    $scope.reputation_score = null;
    $scope.apiError = null;
  };


  function _getUserAndLatestTweetsWithSuccess(user, tweets) {
    $scope.$apply(function() {
      $scope.user = user[0].user;
      // just to get a bigger image
      $scope.user.profile_image_url = $scope.user.profile_image_url.replace('normal', '200x200');

      $scope.latest_tweets = tweets[0].latest_tweets;

      // Compute global reputation score for the user
      // Very basic computation :
      // it is the sum of the user profile reputation score
      // and the reputation of its latest tweets
      $scope.reputation_score = tweets[0].tweets_reputation_score +
        user[0].user_reputation_score;
    });
  }


  function _getUserAndLatestTweetsWithError(err) {
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
      $scope.apiError = error;
    });
  }

  // Call our service to fetch user profile and latest tweets in parallel
  var getProfileAndLatestTweets = function() {
    if ($scope.screenname === '') return;
    init();

    $.when(
      API.getUser($scope.screenname),
      API.getTweets($scope.screenname)
    )
    .done(_getUserAndLatestTweetsWithSuccess)
    .fail(_getUserAndLatestTweetsWithError);
  };


  // When pressing enter in screenname input or clicking check btn
  $scope.check = function() {
    window.localStorage.screenname = $scope.screenname;
    $location.path($scope.screenname);
    getProfileAndLatestTweets();
  };


  // When clicking calendar icons
  $scope.openDatePicker = function($event, pickerName) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope[pickerName] = true;
  };


  // Run the check for the default user on page load
  getProfileAndLatestTweets();
}


angular
  .module('tweeckrApp')
  .controller('mainCtrl', MainCtrl);
