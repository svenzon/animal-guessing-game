import bodyParser from "body-parser";
import chalk from "chalk";
import express from "express";
import mongoose from "mongoose";
import open from "open";
import path from "path";

var db;

const app = express();
const port = 3000;
const dbURI = "mongodb://letsplay:1234@ds111608.mlab.com:11608/animal-app";
const dbCollection = "animals";

mongoose.connect(dbURI, function(err){
    useMongoClient: true
});

mongoose.Promise = global.Promise;
db = mongoose.connection;

db.on("connected", function(){
    console.log(chalk.blueBright("Connected to database!"));

    app.listen(port, function(err) {
        if (err) return console.log(chalk.red(err));

        console.log(chalk.blue(`We're going live on port ${port}!`));
        open("http://localhost:" + port);
    });
});

app.use(express.static(path.join(__dirname, "../src/")));

db.on("error", function(){
    console.log(chalk.redBright("Connection failed!"));
});

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

//extract data from HTML
app.use(bodyParser.urlencoded({extended: true}));

app.post("/animals", (req, res) => {
    console.log(req.body);
});