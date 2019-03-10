const settings = require("./settings"); // settings.json
const firstEntry = process.argv[2];
const lastEntry = process.argv[3];
const dob = process.argv[4];

var knex = require('knex')({
  client: 'pg',
  connection: {
    hostname : "localhost",
    user : "development",
    password : "development",
    database : "test_db"
  }
})

knex('famous_people').then(rows => {
  listPeople(rows)
});

function listPeople(rows) {
  console.log("Searching...");
  for(person of rows) {
    if(person.first_name === firstEntry) {
      console.log("Found " + ((rows).length) + " person(s) by the name '" + firstEntry + "':");
      console.log("- " + (rows).length + ": " + person.first_name + " " + person.last_name + ", born "
      + (person.birthdate).toISOString().substring(0, 10));
      }
    }
  }