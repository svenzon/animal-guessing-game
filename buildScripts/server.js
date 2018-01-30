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

//connect to database using the URI stated above
module.exports = mongoose.connect(dbURI, function(err){
    useMongoClient: true
});

mongoose.Promise = global.Promise;

//save database connection for re-use
db = mongoose.connection;

//print error to console if connection fails
db.on("error", function(){
    console.log(chalk.redBright("Connection failed!"));
});

//print connection message and listen on port 3000
db.on("connected", function(){
    console.log(chalk.blueBright("Connected to database!"));

    app.listen(port, function(err) {
        if (err) return console.log(chalk.red(err));

        console.log(chalk.blue(`We're going live on port ${port}!`));
        open("http://localhost:" + port);
    });
});

//serve all index files (html, css, js)
app.use(express.static(path.join(__dirname, "../src/")));

//extract data from HTML
app.use(bodyParser.urlencoded({extended: true}));

//print text from input to console
app.post("/animals", (req, res) => {
    console.log(req.body);
});