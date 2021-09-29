INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("HR"),
       ("Legal");

INSERT INTO role (title, department_id, salary)
VALUES ("Sales Lead", "Sales" , 10000 ),
       ("Software Engineering", "Engineering" , 12000, ),
       ("Recruitment", "HR" , 8000 ),
       ("Technical Consultant","Engineering" , 8000 ),
       ("Finance Manager", "Finance" , 12000 ),
       ("Legal Team", "Legal" , 16000 );
