const mongoose =  require("mongoose");
let Animal = require("../models/Animal");

let animalController = {};

animalController.list = function(req, res) {
    Animal.find({}).exec(function(err, animals) {
        if (err) {
            console.log("The animals must have escaped!");
        } else {
            res.render("../views/index", {animals: animals});
        }
    });
};

module.exports = animalController;