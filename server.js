var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Tells node that we are creating an "express" server
var app = express(); 
app.use(express.static(__dirname + "/app/public"));

// Creates the PORT 5000 for this app  
var PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
// app.use(bodyParser.json({type:'application/vnd.api+json'}));

require("./app/routing/apiRoutes.js")(app); 
require("./app/routing/htmlRoutes.js")(app);



app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});