import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";
import MongoClient from "mongodb";
import chalk from "chalk";

const port = 3000;
const app = express();
const compiler = webpack(config);
const dbURI = "mongodb://localhost:27017/animal_app";
const dbCollection = "animals";

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open("http://localhost:" + port);
    }
});

MongoClient.connect(dbURI, (err, client) => {
    if (!err) {
        var db = client.db("animal_app");
        console.log(chalk.blue("Connected!"));
        db.collection(dbCollection, function (err, returnCollection) {
            returnCollection.find({ "feature": "carnivorous" }).project({ name: 1, _id: 0}).toArray(function (err, items){
                items.forEach(function(element){
                    console.log(element);
                });
            });
        });
    } else {
        console.log(chalk.red("Oh no!"));
    }
});