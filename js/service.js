function API(API_BASE_URL) {

  return {
    getUser: function(screenname) {
      var url = API_BASE_URL + '/users/' + screenname;
      return $.ajax(url);
    },

    getTweets: function(screenname) {
      var url = API_BASE_URL + '/users/' + screenname + '/tweets';
      return $.ajax(url);
    },

    getReputation: function(screenname) {
      var url = API_BASE_URL + '/users/' + screenname + '/reputation';
      return $.ajax(url);
    }
  };

}


angular
  .module('tweeckrApp')
  .service('API', API);
