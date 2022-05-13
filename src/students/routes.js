const router = require("express").Router();
const {
  getStudents,
  getStudentById,
  addStudent,
  sortStudent,
} = require("./controller");

router.get("/", getStudents);
router.get("/sort", sortStudent);
router.get("/:id", getStudentById);
router.post("/", addStudent);

module.exports = router;
