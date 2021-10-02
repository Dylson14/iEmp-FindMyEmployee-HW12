DROP DATABASE IF EXISTS  main_db;
CREATE DATABASE main_db;

USE main_db;

CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) /* this will hold the department name */
);

CREATE TABLE role (
    id  INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title VARCHAR(30), /* this will hold the role title */
    salary DECIMAL, /* this will hold the role salary */
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department (id)
     /* to hold reference to department role belongs to */
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, /* to hold employee first name */
    last_name VARCHAR(30) NOT NULL, /* to hold employee last name */
    role_id INT NOT NULL, /* to hold reference to employee role */
    manager_id INT NOT NULL, /* to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)*/
    FOREIGN KEY (role_id) REFERENCES role (id)
);

