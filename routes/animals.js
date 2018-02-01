import express from "express";

const router = express.Router();
const Animal = require("../controllers/AnimalController.js");

router.get("/", function(req, res) {
    Animal.list(req, res);
});

module.exports = router;