const db = require("mysql2");

const viewDepartments = () => {
        db.query("SELECT * FROM department", function (err, results) {
        console.log(results);
    })
};

module.exports = viewDepartments;