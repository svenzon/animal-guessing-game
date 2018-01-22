import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";
import chalk from "chalk";
import * as dbModule from "../db/db";

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

//serve the main html file
app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

//throw error if port 3000 is in use, otherwise start server and open database connection
app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open("http://localhost:" + port);
        dbModule.connectToDB();
    }
});