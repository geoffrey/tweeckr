var morgan  = require('morgan');
var cors    = require('cors');
var app     = require('./app');

// Logger
app.use(morgan('tiny'));

// To allow cross origin resource sharing
// /!\ For Production it'd be better to use a dynamic domain whitelist
app.use(cors());

// Start the API
app.set('port', process.env.PORT || 5000);
var server = app.listen(app.get('port'), function() {
  console.log('Tweeckr API running on port ' + server.address().port);
});
