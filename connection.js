/* Bringing in the mysql2 package */
const mysql = require("mysql2");

/* Connecting to the database */
const connectDB = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"main_db"
    },
    console.log("connected to the main_db database")
);

module.exports = connectDB;
