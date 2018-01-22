import Router from "express";
import * as dbModule from "../db/db";

var router = express.Router;

router.get('/all', function(req, res){
    dbModule.listCollection();
})

module.exports = router;