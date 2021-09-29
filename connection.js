/* Bringing in the mysql2 package */
const mysql = require("mysql2");

/* Connecting to the database */
const db = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"main_db"
    },
    console.log("connected to the main_db database")
);

/* Query databse */

const viewDepartment = db.query("SELECT * FROM department", function (err, results) {
    console.log(results);
})

module.exports = viewDepartment;