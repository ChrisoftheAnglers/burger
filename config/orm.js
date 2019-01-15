// Import connection
var connection = require("./connection.js");

// orm object
var orm = {
    selectAll: function(table, cb) {
        // TODO: query connection to select all rows and display to user
        var queryString = "SELECT * FROM ?";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result); // Callback function which will used in another script
        })
    },
    insertOne: function(table, column, newValue, cb) {
        // TODO: query connection to insert a row (not id, that is automatic)
        var queryString = "INSERT INTO ? (?) VALUES (?)";
        connection.query(queryString, [table, column, newValue], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    },
    updateOne: function(table, setColumn, setValue, columnWhere, valueWhere, cb) { // Will only allow for status update, not name changes
        // TODO: query connection to update a row (should use name or id for selection of row)
        var queryString = "UPDATE ? SET ? = ? WHERE ? = ?";
        connection.query(queryString, [table, setColumn, setValue, columnWhere, valueWhere], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    }
}

// Export orm
module.exports = orm;