import mongoose from "mongoose";

var mongoDB = "mongodb://letsplay:1234@ds111608.mlab.com:11608/animal-app";

mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection failed"));

var animalSchema = new mongoose.Schema({
    name: String,
    type: String,
    mammal: Boolean,
    aquatic: Boolean,
    predatory: Boolean,
    size: String,
    feature: String
});

var Animal = db.model("Animal", animalSchema);

Animal.find({}, { _id: 0, name: 1 }, function(err, docs){
    console.log(docs);
});

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