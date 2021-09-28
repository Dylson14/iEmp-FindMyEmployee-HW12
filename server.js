/* Bringing all the packages and exports necessarry for the app. */
const inquirer = require("inquirer");
const menuPrompt = require("./Prompts/menuPrompt");

/* This array will later contain all the employees created */
const employeeArr = [];

const Start = () => {
  inquirer.prompt(menuPrompt).then((answers) => {
        /* inquirer is returning an object with key/values based on the names of the questions. So to read the data from your menu prompt you need the following console.log...*/
        console.log( `You have selected: ${answers.mainMenu}`); 

    if (answers.mainMenu === "View All Departments") {
        /* Now I want to show the "department" table I created in the db folder.*/
        /* console.table(department); <-- This does not work, I need to know how to fetch this data from another file. Is it just module.exports?  */
        console.log("Entered the if statement for View All Departments");
    }
  });
  console.log("Start function has ended");
};

Start();
