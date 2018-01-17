var mongoose = require('mongoose');
var mongoDB = "mongodb://localhost:27017/animal_app/animals";
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection failed'));

var animalSchema = new mongoose.Schema({
    name: String,
    type: String,
    mammal: Boolean,
    aquatic: Boolean,
    size: String,
    feature: String
});

var Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;

// var dog = new Animal({
//     name: "dog",
//     type: "canine",
//     mammal: true,
//     aquatic: false,
//     size: "medium",
//     feature: "bark"
// });

// dog.save(function(err, dog){
//     if(err) {
//         console.log("Whoops");
//     } else {
//         console.log("Animal saved");
//         console.log(dog);
//     }
// });