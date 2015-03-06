// Express app
var app = require('express')();

// Middleware
require('./middleware/http-parser')(app)

// To allow cross origin resource sharing
// /!\ For Production it'd be better to use a dynamic domain whitelist
app.use(require('cors')());

// Routes
app.use('/users', require('./routes/users'));

// Error handling
require('./middleware/errors-handler')(app);


module.exports = app;

