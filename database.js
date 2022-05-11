const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "node_postgres",
  password: "post2022",
  port: 5432,
});

module.exports = pool;
