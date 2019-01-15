// Dependencies
var mysql = require("mysql");

// Creating a connection
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'burgers_db'
});

// Exporting the connection
module.exports = connection;