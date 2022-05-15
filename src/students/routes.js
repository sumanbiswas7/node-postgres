const router = require("express").Router();
const {
  getStudents,
  getStudentById,
  addStudent,
  sortStudent,
  updateStudent,
  deleteStudent,
} = require("./controller");

router.get("/", getStudents);
router.post("/", addStudent);
router.get("/sort", sortStudent);
router.get("/:id", getStudentById);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
