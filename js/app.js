var tweeckrApp = angular.module('tweeckrApp', []);

// tweeckrApp.constant('API_BASE_URL', 'http://localhost:5000');
tweeckrApp.constant('API_BASE_URL', 'http://tweeckr.herokuapp.com');


tweeckrApp.controller('mainCtrl', function($scope, $timeout, $location, API_BASE_URL) {

  var init = function() {
    $scope.screenname = '';
    $scope.user = null;
    $scope.latest_tweets = [];
    $scope.ajaxError = null;
  };


  var getTweeckrUser = function() {
    if ($scope.screenname === '') {
      return $.Deferred().reject({ message: 'No Screen name specified.'});
    }

    var url = API_BASE_URL + '/users/' + $scope.screenname;
    return $.ajax({ url: url });
  };


  var getProfileAndLatestTweets = function() {
    getTweeckrUser()
    .success(function getTweeckrUserWithSuccess(data) {
      console.log('success', data);
      $scope.$apply(function() {
        $scope.user = data.user;
        // just to get a bigger image
        $scope.user.profile_image_url = $scope.user.profile_image_url.replace('normal', '200x200');
        $scope.latest_tweets = data.latest_tweets;
      });
    })
    .fail(function getTweeckrUserWithFailure(error) {
      console.log('error', error);
    });
  };


  $scope.check = function() {
    getProfileAndLatestTweets();
  };


  init();

});
