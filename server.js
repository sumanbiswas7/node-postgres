const express = require("express");
const app = express();
const studentsRoute = require("./src/students/routes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`💡Node-Postgres Server is running at port ${PORT}`);
});

app.use("/students", studentsRoute);

const PORT = process.env.port || 3000;
app.listen(PORT, () => console.log(`💡Server is running at port ${PORT}`));
