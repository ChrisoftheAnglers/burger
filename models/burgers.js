// Dependencies
var orm = require("../config/orm.js");

// Model (should be able to show burgers, allow user to insert burger, and allow burger to be eaten)
var burgers = {
    showBurgers: function(cb) { // Function to show all burgers using ORM
        orm.selectAll("burgers", function(result) {
            cb(result);
        });
    },
    insertBurger: function(newBurger, cb) { // Function to insert a new burger with specified name
        orm.insertOne("burgers", "burger_name", newBurger, function(result) {
            cb(result);
        });
    },
    devourBurger: function(id, cb) { // Function to devour burger, with only id as a parameter (besides callback)
        orm.updateOne("burgers", "devoured", true, "id", id, function(result) {
            cb(result);
        });
    }
}

// Export
module.exports = burgers;