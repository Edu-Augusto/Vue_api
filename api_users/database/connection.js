var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'edu131413',
      database : 'api_user'
    }
  });

module.exports = knex