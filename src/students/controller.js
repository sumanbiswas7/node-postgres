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

const addStudent = (req, res) => {
  const data = req.body;

  if (!data.name || !data.age || !data.class) {
    res.status(400).end("Student's name, age and class are required");
    return;
  }

  pool.query(
    "SELECT * FROM students WHERE name = $1",
    [data.name],
    (error, results) => {
      if (results.rows.length) {
        res.status(400).end("Student already exists");
        return;
      }
    }
  );

  pool.query(
    "INSERT INTO students (name,age,class) VALUES ($1,$2,$3)",
    [data.name, data.age, data.class],
    (error, results) => {
      if (error) {
        res.send(error);
        return;
      } else {
        res.status(201).send("Person added sucessfully");
        return;
      }
    }
  );
};

const sortStudent = (req, res) => {
  pool.query(
    "SELECT * FROM students ORDER BY name LIMIT 10",
    (error, results) => {
      if (error) {
        res.send(error);
        return;
      } else {
        res.status(200).send(results.rows);
      }
    }
  );
  // " SELECT DISTINCT name FROM students "
};

module.exports = { getStudents, getStudentById, addStudent, sortStudent };
