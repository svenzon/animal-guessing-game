let mongoose = require("../db/db");

//creates Mongoose schema for animals, restricting some fields to specific values
let animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    mammal: {
        type: String,
        enum: ["yes", "no"],
        required: true
    },
    aquatic: {
        type: String,
        enum: ["yes", "no"],
        required: true
    },
    predatory: {
        type: String,
        enum: ["yes", "no"],
        required: true
    },
    size: {
        type: String,
        enum: ["small", "medium", "large"],
        required: true
    },
    feature: {
        type: String,
        required: true
    },
});

let Animal = mongoose.model("Animal", animalSchema);
module.exports = Animal;
// var snake = new Animal({
//     name: "snake",
//     type: "reptile",
//     mammal: false,
//     aquatic: false,
//     size: "small",
//     feature: "hiss"
// });

// snake.save(function(err, snake){
//     if(err) {
//         console.log("Whoops");
//     } else {
//         console.log("Animal saved");
//         console.log(snake);
//     }
// });