/* Bringing all the packages and exports necessarry for the app. */
const inquirer = require("inquirer");
const util = require("util");
const menuPrompt = require("./Prompts/menuPrompt");
const connectDB = require("./connection");
const viewDepartments = require("./db/sqlFuncs");

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
      default: 
              console.log("Default case entered");
              console.log(answers.mainMenu);

    }
      
  });

  console.log("Start function has ended");
};

Start();
