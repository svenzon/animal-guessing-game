// insert values according to the following schema
// name: String,
// type: String,
// mammal: Boolean,
// aquatic: Boolean,
// size: String,
// feature: String

// MongoClient.connect(dbURI, (err, client) => {
//     if (!err) {
//         var db = client.db("animal_app");
//         console.log(chalk.blue("Connected!"));
//         db.collection(dbCollection, function (err, returnCollection) {
//             returnCollection.find({ "feature": "carnivorous" }).project({ name: 1, _id: 0}).toArray(function (err, items){
//                 items.forEach(function(element){
//                     console.log(element);
//                 });
//             });
//         });
//     } else {
//         console.log(chalk.red("Oh no!"));
//     }
// });