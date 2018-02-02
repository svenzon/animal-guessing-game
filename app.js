import bodyParser from "body-parser";
import chalk from "chalk";
import ejs from "ejs";
import express from "express";
import mongoose from "mongoose";
import open from "open";
import path from "path";
import router from "./routes/animals";

var db;

//declare variables for express and mongodb
const app = express();
const port = 3000;
const dbURI = "mongodb://letsplay:1234@ds111608.mlab.com:11608/animal-app";

//connect to database using the URI stated above
module.exports = mongoose.connect(dbURI, function(err){
    useMongoClient: true
});

mongoose.Promise = global.Promise;

//save database connection
db = mongoose.connection;

//if db connection fails, print error message
db.on("error", function(){
    console.log(chalk.redBright("Connection failed!"));
});

//if db connection succeeds, print message and listen on port 3000
db.on("connected", function(){
    console.log(chalk.blueBright("Connected to database!"));

    app.listen(port, function(err) {
        if (err) return console.log(chalk.red(err));

        console.log(chalk.blue(`We're going live on port ${port}!`));
        open("http://localhost:" + port);

        //tell app where to find route and use it
        let animals = require("./routes/animals");
        app.use("/animals", animals);
    });
});

//tell the app where to find routes

//setup EJS template engine
app.set("view engine", "ejs");

//render html from index.ejs template in /views folder
app.get("/", function(req, res){
    res.render("index");
});

//use static files (css, js) in public directory
app.use(express.static("public"));

//extract data from HTML
app.use(bodyParser.urlencoded({extended: true}));