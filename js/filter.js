function LabelFilter() {
  return function(score) {
    if (score > 0) return 'label-success';
    if (score === 0) return 'label-warning';
    return 'label-danger';
  }
}


function TimeAgo() {
  return function(date) {
    return moment(date).fromNow();
  }
}


function MatchFilters() {
  return function(tweets, picturesOnly, minRetweets, minStars, dateFrom, dateTo) {
    var filtered = [];
    angular.forEach(tweets, function(t) {
      var hasPicture = t.extended_entities ? t.extended_entities.media.length > 0 : false;

      // Not the best but more readable imo
      if (!picturesOnly || picturesOnly && hasPicture) {
        if (t.retweet_count >= minRetweets) {
          if (t.favorite_count >= minStars) {
            if (!dateFrom || dateFrom && moment(t.created_at).isAfter(dateFrom)) {
              if (!dateTo || dateTo && moment(t.created_at).isBefore(dateTo)) {
                filtered.push(t);
              }
            }
          }
        }
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
