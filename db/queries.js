/* bringing in the connection file so that we know what database to use */
const db = require("../connection");

const viewDepartments = () => {
        db.query("SELECT * FROM department", function (err, results) {
        console.table(results);
    })
};

const viewRoles = () => {
        db.query("SELECT * FROM role JOIN department ON role.department_id = department.id", function (err, results) {
        console.table(results);
    })
};



module.exports = {viewDepartments, viewRoles};
