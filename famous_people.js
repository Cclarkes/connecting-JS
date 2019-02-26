const pg = require("pg");
const settings = require("./settings"); // settings.json
const firstEntry = process.argv[2];
const lastEntry = process.argv[3];
const client = new pg.Client(settings);

client.connect((err, db) => {
    if(err) {
        console.error(("Connection Error"), err);
    }
    listPeople(db);
});

function listPeople(db) {
    console.log("Searching...");
    db.query("SELECT * FROM famous_people WHERE first_name LIKE '" + firstEntry + "'", (err, res) => {
        for(person of res.rows) {
            console.log("Found " + ((res.rows).length) + " person(s) by the name '" + firstEntry + "':");
            console.log("- " + (res.rows).length + ": " + person.first_name + " " + person.last_name + ", born "
            + (person.birthdate).toISOString().substring(0, 10));
            db.end();
        }
        })
    }
