/* Bringing all the packages and exports necessarry for the app. */
const inquirer = require("inquirer");
const util = require("util");
const menuPrompt = require("./Prompts/menuPrompt");
const viewDepartment = require("./schema");

/* This array will later contain all the employees created */
const employeeArr = [];

/* Playing around with ways to make start function asynchronous*/
const makeFuncAsync = util.promisify(Start)


const Start = () => {
  inquirer
  .prompt(menuPrompt)
  .then((answers) => {
        /* inquirer is returning an object with key/values based on the names of the questions. So to read the data from your menu prompt you need the following console.log...*/
        console.log( `You have selected: ${answers.mainMenu}`); 

    if (answers.mainMenu === "View All Departments") {
        /* Now I want to show the "department" table I created in the db folder.*/
        console.log("Entered the if statement for View All Departments");
        viewDepartment; /* using SQL queries I was able to view the contents of the "department" table. But now they appear regardless of the if statement. I need to make the Start function asynchronous I believe.*/
    }
  });
  console.log("Start function has ended");
};

Start();
