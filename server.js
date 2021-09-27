/* Bringing all the packages and exports necessarry for the app. */
const inquirer = require("inquirer");
const menuPrompt = require("./Prompts/menuPrompt");

/* This array will later contain all the employees created */
const employeeArr = [];

const Start = () => {
  inquirer.prompt(menuPrompt).then((answers) => {
    console.log(`These are the ${answers}`);
  });

};

Start();
