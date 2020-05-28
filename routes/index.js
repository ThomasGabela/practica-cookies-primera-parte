var express = require('express');
var router = express.Router();
const controller = require("../controller/index")


/* GET home page. */
router.get("/", controller.index)
router.post("/", controller.color)

router.get("/algo", controller.algo)

module.exports = router;
