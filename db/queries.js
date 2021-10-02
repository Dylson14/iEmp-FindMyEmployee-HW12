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

const viewEmployees = () => {
    db.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name,' ',manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN manager ON manager.id = employee.manager_id", function (err, results) {
        console.table(results);    
    })
};


module.exports = {viewDepartments, viewRoles, viewEmployees};
