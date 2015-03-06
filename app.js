// Express app
var app = require('express')();

// Middlewares
require('./middleware/http-parser')(app)

// Routes
app.use('/users', require('./routes/users'));

// Error handling
require('./middleware/errors-handler')(app);


module.exports = app;

