/* Bringing all the packages and exports necessarry for the app. */
const inquirer = require("inquirer");
const menuPrompt = require("./Prompts/menuPrompt");

/* This array will later contain all the employees created */
const employeeArr = [];

const Start = () => {
  inquirer.prompt(menuPrompt).then((answers) => {
        /* returns something weird like [object object] */
        console.log( `These are the ${answers}`); 

    if (answers.mainMenu === "View All Departments") {
        /* the department table created in schema.sql file */
        console.table(department); 
    }
  });
  console.log("Start function has ended");
};

Start();
