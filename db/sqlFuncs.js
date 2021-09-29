/* bringing in the connection file so that we know what database to use */
const db = require("../connection");

const viewDepartments = () => {
        db.query("SELECT * FROM department", function (err, results) {
        console.log(results);
    })
};

module.exports = viewDepartments;