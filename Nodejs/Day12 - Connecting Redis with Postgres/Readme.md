THA: Create tables and keys on redis with code

reddis install
    Reddis Store
    Reddis Client
For above we need to install 3 packages
    express-session
    redis
    connect-redis
$ npm install express-session redis connect-redis

90% of the time redis is used to store session and hence we also install express-session

#To connect to redis in windows type
    redis-server in the console/terminal
    after that -> redis-cli

Using Mongo DB

for using mongoDB we need 2 packages
    mongodb and mongoose(https://www.npmjs.com/package/mongoose)

    Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
    Mongoose is like squelize

without sequelize/using node-postgres(https://node-postgres.com/)
const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'devs',
  password: 'root',
  port: 5432,
});

module.exports = pool;

const pool = require('./../database/usingPg');
router.get('/fetch', function (req, res) {
  pool.query('Select * From "Users"', (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});