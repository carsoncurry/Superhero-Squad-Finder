// needs `express` and `path`
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

// lets express parse data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// get our routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// start the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

