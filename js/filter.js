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


angular
  .module('tweeckrApp')
  .filter('label', LabelFilter)
  .filter('timeago', TimeAgo);
