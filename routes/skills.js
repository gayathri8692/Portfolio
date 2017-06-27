var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.render("skills", {
    title: "Skills"
  });
});

module.exports = router;
