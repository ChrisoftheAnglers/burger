// Dependencies
var router = require("express").Router(); // Use Router() so that extra line for initialize isn't needed
var burgers = require("../models/burgers.js");

// Router
// Function to load starting page (and get the list of burgers)
router.get("/", function(req, res) {
    burgers.showBurgers(function(data) {
        var hbsObject = { // hbs stands for 'handlebars'
            burgers: data // use burgers as a handlebar tag
        };
        console.log(hbsObject); // For debugging
        res.render("index", hbsObject);
    })
})

// Function to handle adding new burgers to list
router.post("/api/burgers", function(req, res) {
    burgers.insertBurger(req.body.burgerName, function(data) { // Check for 'name' in body for input field
        res.json({id: data.insertId}); // Send back ID for new burger (will be assigned to button)
    })
})
// Function to handle updating burger rows (namely the 'devoured' boolean)
router.put("/api/burgers/:id", function(req, res) { //ID should be input into url through button click
    burgers.devourBurger(req.params.id, function(devoured) {
        // No need for any specific user output beyond updating the data to be current using a response
        if (result.changedRows === 0) {
            return res.status(404).end(); // Give 404 for id not found (error)
        }
        res.status(200).end(); // Give success status
    })
})

// Export Router
module.exports = router;