import mongoose from "mongoose";

//creates Mongoose schema for animals, restricting some fields to specific values
let animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    group: {
        type: String,
        enum: ["amphibian", "bird", "fish", "invertebrate", "mammal", "reptile"],
        required: true
    },
    diet: {
        type: String,
        enum: ["carnivorous", "omnivorous", "herbivorous"],
        required: true
    },
    size: {
        type: String,
        enum: ["tiny", "small", "medium", "large", "gigantic"],
        required: true
    },
    feature: {
        type: String,
        required: true
    },
});

var animal = mongoose.model("Animal", animalSchema);

module.exports = animal;
// var newAnimal = new Animal({
//     name: "alligator",
//     group: "reptile",
//     diet: "carnivorous",
//     size: "large",
//     feature: ""
// });

// var newAnimal = new Animal({
//     name: "crocodile",
//     group: "reptile",
//     diet: "carnivorous",
//     size: "large",
//     feature: ""
// });

// snake.save(function(err, snake){
//     if(err) {
//         console.log("Whoops");
//     } else {
//         console.log("Animal saved");
//         console.log(snake);
//     }
// });