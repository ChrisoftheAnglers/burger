// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

//Get port for listening
var PORT = process.env.PORT || 8080; // Heroku can automatically assign port

// Initialize app
var app = express();

// Allow app to access and serve static content from 'public' directory
app.use(express.static("public"));

// Use JSON parsing in app
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Configure app for Handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"})); // Set the default Handlebars layout to 'main'
app.set("view engine", "handlebars"); // Set viewing engine to Handlebars

// Import routes and use in app
var routes = require("./controllers/burgersController.js");
app.use(routes);

// Start server to listen for requests
app.listen(PORT, function() {
    console.log("Server listening on port: " + PORT); // Don't specify host, since it is subject to change
})