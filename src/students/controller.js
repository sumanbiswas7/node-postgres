const pool = require("../../database");

const getStudents = (req, res) => {
  pool.query("SELECT * FROM students", (error, results) => {
    if (error) {
      res.send(error);
    } else {
      res.send(results.rows);
    }
  });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM students WHERE id = $1", [id], (error, results) => {
    if (error) {
      res.send(error);
    } else {
      res.send(results.rows);
    }
  });
};

module.exports = { getStudents, getStudentById };
