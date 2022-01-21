require('dotenv').config();

var knex = require('knex')({
    client: 'postgresql',
    connection: {
      host : '127.0.0.1',
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : 'api_users'
    }
  });

module.exports = knex