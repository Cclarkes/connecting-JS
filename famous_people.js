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
    db.query("SELECT * FROM famous_people WHERE first_name LIKE '" + firstEntry + "'", (err, res) => {
        console.log(res.rows);
    })
}