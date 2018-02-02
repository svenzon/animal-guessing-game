import express from "express";

const router = express.Router();
let animal = require("../controllers/AnimalController.js");

router.get("/", function(req, res) {
    animal.list(req, res);
});

module.exports = router;