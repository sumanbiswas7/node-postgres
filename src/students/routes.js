const router = require("express").Router();
const { getStudents, getStudentById } = require("./controller");

router.get("/", getStudents);
router.get("/:id", getStudentById);

module.exports = router;
