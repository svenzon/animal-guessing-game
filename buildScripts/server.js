import bodyParser from "body-parser";
import chalk from "chalk";
import express from "express";
import MongoClient from "mongodb";
import open from "open";
import path from "path";

const app = express();
const port = 3000;
const dbURI = "mongodb://letsplay:1234@ds111608.mlab.com:11608/animal-app";
const dbCollection = "animals";

var db;
var dbName;

MongoClient.connect(dbURI, (err, client) => {
    if (err) return console.log(chalk.red(err));

    db = client.db("AnimalDatabase");
    console.log(chalk.greenBright(`Connected to database ${db}!`));

    //throw error if port 3000 is in use, otherwise start server and open database connection
    app.listen(port, function(err) {
        if (err) return console.log(chalk.red(err));

        console.log(chalk.blue(`We're going live on port ${port}!`));
        open("http://localhost:" + port);
    });
});

//extract data from HTML
app.use(bodyParser.urlencoded({extended: true}));

app.post("/animals", (req, res) => {
    console.log(req.body);
});

app.get("/", (req, res) => {
    db.collection("animals", function (err, returnCollection) {
        returnCollection.find({}).project({ name: 1, _id: 0}).toArray(function (err, items){
            items.forEach(function (element) {
                console.log(element);
            });
        });
    });
});

//serve the main html file
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});