const mongoose = require("mongoose");

//creates Mongoose schema for animals, restricting some fields to specific values
let AnimalSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Animal", AnimalSchema);