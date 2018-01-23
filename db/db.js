// insert values according to the following schema
// name: String,
// type: String,
// mammal: Boolean,
// aquatic: Boolean,
// size: String,
// feature: String
import MongoClient from "mongodb";
import chalk from "chalk";

const dbURI = "mongodb://letsplay:1234@ds111608.mlab.com:11608/animal-app";
const dbCollection = "animals";

module.exports = {
    //connect to database
    connectToDB: function () {
        MongoClient.connect(dbURI, (err, client) => {
            if (!err) {
                let db = client.db("animal_app");
                console.log(chalk.blue("Connected!"));
            } else {
                console.log(chalk.red("Oh no!"));
            }
        });
    },

    //get database if needed
    getDB: function () {
        return db;
    },

    //list names of all animals in collection
    listCollection: function() {
        db.collection(dbCollection, function (err, returnCollection) {
            returnCollection.find({}).project({ name: 1, _id: 0}).toArray(function (err, items){
                items.forEach(function (element) {
                    console.log(element);
                });
            });
            db.close();
        });
    }
};