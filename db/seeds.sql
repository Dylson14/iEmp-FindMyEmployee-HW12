INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("HR"),
       ("Legal");

INSERT INTO role (title, department_id, salary)
VALUES ("Sales Lead", 1, 10000),
       ("Software Engineering", 2, 12000),
       ("Recruitment", 4, 8000),
       ("Technical Consultant", 2, 8000),
       ("Finance Manager", 3, 12000),
       ("Legal Team", 5, 16000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Buckley", 1, 1),
       ("Dylson", "Oliveira", 3, null),
       ("Jon", "Courtney", 4, null),
       ("Carol", "Gordon", 5, null),
       ("Paul", "Aston", 6, null),
       ("Mel", "Jack", 7, null),
       ("Rhys", "Barrett", 2, 2);