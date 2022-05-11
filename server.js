const app = require("express")();
const getStudents = require("./src/students/routes");

app.get("/", (req, res) => {
  res.send(`💡Node-Postgres Server is running at port ${PORT}`);
});

app.use("/students", getStudents);

const PORT = process.env.port || 3000;
app.listen(PORT, () => console.log(`💡Server is running at port ${PORT}`));
