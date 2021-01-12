const { Pool } = require("pg")

const pool = new Pool({
  user: "ddbb",
  password: "ddbb99js",
  host: "localhost",
  port: 4000,
  database: "ddbb"
});

module.exports = pool;