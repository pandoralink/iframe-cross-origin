var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Client" });
});

router.get("/proxy", function (req, res, next) {
  res.render("proxy", { title: "Proxy" });
});

module.exports = router;
