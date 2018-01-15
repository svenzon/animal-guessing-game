var mongoose = require('mongoose');
var dbConnection = mongoose.connect("mongodb://localhost/animal_app", {
    useMongoClient: true
});

var animalSchema = new mongoose.Schema({
    name: String,
    type: String,
    mammal: Boolean,
    aquatic: Boolean,
    size: String,
    feature: String
});

var Animal = mongoose.model("Animal", animalSchema);

var dog = new Animal({
    name: "dog",
    type: "canine",
    mammal: true,
    aquatic: false,
    size: "medium",
    feature: "bark"
});

dog.save(function(err, dog){
    if(err) {
        console.log("Whoops");
    } else {
        console.log("Animal saved");
        console.log(dog);
    }
});