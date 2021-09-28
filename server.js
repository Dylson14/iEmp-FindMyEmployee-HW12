/* Bringing all the packages and exports necessarry for the app. */
const inquirer = require("inquirer");
const util = require("util");
const menuPrompt = require("./Prompts/menuPrompt");
const viewDepartment = require("./schema");

/* This array will later contain all the employees created */
const employeeArr = [];

/* Playing around with ways to make start function asynchronous*/
const makeFuncAsync = util.promisify(Start)

/* I need to make this async now! */
const Start = () => {
  inquirer
  .prompt(menuPrompt)
  .then((answers) => {
        /* inquirer is returning an object with key/values based on the names of the questions. So to read the data from your menu prompt you need the following console.log...*/
        console.log( `You have selected: ${answers.mainMenu}`); 

    if (answers.mainMenu === "View All Departments") {
        /* Now I want to show the "department" table I created in the db folder.*/
        /* console.table(department); <-- This does not work, I need to know how to fetch this data from another file. Is it just module.exports?  */
        console.log("Entered the if statement for View All Departments");
        viewDepartment;
    }
  });
  console.log("Start function has ended");
};

Start();
