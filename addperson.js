const firstEntry = process.argv[2];
const lastEntry = process.argv[3];
const dob = process.argv[4];

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'development',
    password : 'development',
    database : 'test_db',
    "port": 5432,
    "ssl": true
  }
})

knex.insert({
    first_name: firstEntry,
    last_name: lastEntry,
    birthdate: dob
}).into('famous_people').then(function (result) {
  console.log(result)
  knex.destroy();
});



