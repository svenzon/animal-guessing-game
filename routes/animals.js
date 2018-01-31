import express from "express";

let router = express.Router();
let animal = require("../controllers/AnimalController.js");

router.get("/", animal.list);

module.exports = router;