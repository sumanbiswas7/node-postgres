const router = require("express").Router();
const {
  getStudents,
  getStudentById,
  addStudent,
  sortStudent,
  updateStudent,
} = require("./controller");

router.get("/", getStudents);
router.post("/", addStudent);
router.get("/sort", sortStudent);
router.get("/:id", getStudentById);
router.put("/:id", updateStudent);

module.exports = router;
