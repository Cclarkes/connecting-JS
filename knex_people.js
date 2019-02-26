const settings = require("./settings"); // settings.json
const firstEntry = process.argv[2];
const lastEntry = process.argv[3];

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : "localhost",
    user : "development",
    password : "development",
    database : "test_db"
  }
});

client.connect((err, db) => {
    if(err) {
        console.error(("Connection Error"), err);
    }
    createPerson(firstEntry, lastEntry);
});

function createPerson(firstname, lastname) {
    return knex('famous_people').insert({first_name: "'" + firstname + "'",
                                   last_name: "'" + lastname + "'"});
}