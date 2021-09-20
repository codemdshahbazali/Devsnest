const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'devs',
  password: 'root',
  port: 5432,
});

module.exports = pool;
