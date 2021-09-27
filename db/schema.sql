CREATE DATABASE main_db;

USE main_db;

CREATE TABLE department (
id INT PRIMARY KEY;
name VARCHAR(30); /* this will hold the department name */
)

CREATE TABLE role (
    id INT PRIMARY KEY;
    title VARCHAR(30); /* this will hold the role title */
    salary DECIMAL /* this will hold the role salary */
    department_id INT /* to hold reference to department role belongs to */
)

CREATE TABLE employee (
    id INT PRIMARY KEY;
    first_name VARCHAR(30); /* to hold employee first name */
    last_name VARCHAR(30); /* to hold employee last name */
    role_id INT /* to hold reference to employee role */
    manager_id INT /* to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)*/
)