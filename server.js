var morgan  = require('morgan');
var app     = require('./app');

// Logger
app.use(morgan('tiny'));

// Start the API
app.set('port', process.env.PORT || 5000);
var server = app.listen(app.get('port'), function() {
  console.log('Tweeckr API running on port ' + server.address().port);
});
