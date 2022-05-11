const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Students");
});

module.exports = router;
