function LabelFilter() {
  return function(score) {
    if (score > 0) {
      return 'label-success';
    }
    if (score === 0) {
      return 'label-warning';
    }
    return 'label-danger';
  }
};

function TimeAgo() {
  return function(date) {
    return moment(date).fromNow();
  }
}


function MatchFilters() {
  return function(tweets, picturesOnly, minRetweets) {
    var filtered = [];
    angular.forEach(tweets, function(t) {
      var hasPicture = t.extended_entities ? t.extended_entities.media.length > 0 : false;
      if ((!picturesOnly || picturesOnly && hasPicture) && t.retweet_count >= minRetweets) {
        filtered.push(t);
      }
    });
    return filtered;
  };
}


angular
  .module('tweeckrApp')
  .filter('label', LabelFilter)
  .filter('timeago', TimeAgo)
  .filter('matchFilters', MatchFilters)
