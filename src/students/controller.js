const pool = require("../../database");

const getStudents = (req, res) => {
  pool.query("SELECT * FROM students", (error, results) => {
    if (error) {
      res.send(error);
      return;
    } else {
      res.send(results.rows);
    }
  });
};

module.exports = { getStudents };
