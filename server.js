/* Bringing all the packages and exports necessarry for the app. */
const inquirer = require("inquirer");
const util = require("util");
const menuPrompt = require("./Prompts/menuPrompt");
const connectDB = require("./connection");
const viewDepartments = require("./db/sqlFuncs");

/* This array will later contain all the employees created */
const employeeArr = [];

/* Playing around with ways to make start function asynchronous*/
/* const makeFuncAsync = util.promisify(Start) */


const Start = () => {
  inquirer.prompt(menuPrompt)
  .then((answers) => {
    /* first thing I want is to enter the switch case, then with their answers enter the respective case */
    switch (answers.mainMenu) {
      case "View All Departments":
              console.log(`You have selected: ${answers.mainMenu}`);
              viewDepartments();
               break;
      default: 
              console.log("Default case entered");
              console.log(answers.mainMenu);

    }
      /* if (answers.mainMenu === "View All Departments") {
         Now I want to show the "department" table I created in the db folder.
        console.log("Entered the if statement for View All Departments");
        viewDepartment; /* using SQL queries I was able to view the contents of the "department" table. But now they appear regardless of the if statement. I need to make the Start function asynchronous I believe.
    } */
  });

  console.log("Start function has ended");
};

Start();
