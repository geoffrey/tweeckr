// Express app
var app = require('express')();


// Modules
var morgan = require('morgan');
var parser = require('./middleware/http-parser');
var errors = require('./middleware/errors-handler');


// Middlewares
app.use(morgan('tiny'));
parser(app);


// Routes
app.use('/users', require('./routes/users'));


// Error handling
errors(app);


// Start the API
app.set('port', process.env.PORT || 5000);
var server = app.listen(app.get('port'), function() {
  console.log('Tweeckr API running on port ' + server.address().port);
});
