/* Bringing all the packages and exports necessarry for the app. */
const inquirer = require("inquirer");
const util = require("util");
const menuPrompt = require("./Prompts/menuPrompt");
const connectDB = require("./connection");
const {viewDepartments, viewRoles, viewEmployees} = require("./db/queries");

/* This array will later contain all the employees created */
const employeeArr = [];

const Start = () => {
  inquirer.prompt(menuPrompt)
  .then((answers) => {
    /* first thing I want is to enter the switch case, then with their answers enter the respective case */
    switch (answers.mainMenu) {
      case "View All Departments":
              console.log(`You have selected: ${answers.mainMenu}`);
              viewDepartments();
               break;

      case "View All Roles":
              console.log(`You have selected: ${answers.mainMenu}`);
              viewRoles();
               break;

      case "View All Employees":
              console.log(`You have selected: ${answers.mainMenu}`);
              viewEmployees();
               break;

      case "Add A Department":
              console.log(`You have selected: ${answers.mainMenu}`);
               break;

      case "Add A Role":
              console.log(`You have selected: ${answers.mainMenu}`);
               break;

      case "Add An Employee":
              console.log(`You have selected: ${answers.mainMenu}`);
               break;

      case "Update An Employee":
              console.log(`You have selected: ${answers.mainMenu}`);
               break;

      default: 
              console.log("Default case entered");
              console.log(answers.mainMenu);

    }
      
  });

  console.log("Start function has ended");
};

Start();
