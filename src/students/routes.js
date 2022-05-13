const router = require("express").Router();
const {
  getStudents,
  getStudentById,
  addStudent,
  sortStudent,
} = require("./controller");

router.get("/", getStudents);
router.get("/:id", getStudentById);
router.get("/sort_by_name", sortStudent);
router.post("/", addStudent);

module.exports = router;
