const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const team = require("./util/generateHtml");
const teamArr = [];

function askQuestion() {
  console.log("Welcome to the team generator!");
  console.log("Please build your team 👥");
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team manager's name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is the team manager's id?",
        name: "managerId",
      },
      {
        type: "input",
        message: "What is the team manager's email?",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What is the team manager's office number?",
        name: "officeNumber",
      },
    ])
    .then((ans) => {
      const freshManager = new Manager(
        ans.managerName,
        parseInt(ans.managerId),
        ans.managerEmail,
        parseInt(ans.officeNumber)
      );
      teamArr.push(freshManager);
      console.log(teamArr);
      function addTeamMember() {
        inquirer
          .prompt([
            {
              type: "list",
              message: "what type of team member would you like to add?",
              name: "addTeamMember",
              choices: [
                "Engineer",
                "Intern",
                "I don't want to add anymore team members",
              ],
            },
          ])
          .then((ans) => {
            switch (ans.addTeamMember) {
              case "Engineer":
                addEngineer();
                break;

              case "Intern":
                addIntern();
                break;

              default:
                console.log(teamArr);
                generateHtml();
                break;
            }
          });
      }
      addTeamMember();
      function addEngineer() {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the your engineer's name?",
              name: "engName",
            },
            {
              type: "input",
              message: "What is the your engineer's id?",
              name: "engId",
            },
            {
              type: "input",
              message: "What is the your engineer's email?",
              name: "engEmail",
            },
            {
              type: "input",
              message: "What is the your engineer's github username?",
              name: "engGit",
            },
          ])
          .then((res) => {
            const freshEngineer = new Engineer(
              res.engName,
              parseInt(res.engId),
              res.engEmail,
              res.engGit
            );
            teamArr.push(freshEngineer);
            console.log(teamArr);
            addTeamMember();
          });
      }

      function addIntern() {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the your intern's name?",
              name: "internName",
            },
            {
              type: "input",
              message: "What is the your intern's id?",
              name: "internId",
            },
            {
              type: "input",
              message: "What is the your intern's email?",
              name: "internEmail",
            },
            {
              type: "input",
              message: "What is the your intern's school?",
              name: "internSchool",
            },
          ])
          .then((res) => {
            const freshIntern = new Intern(
              res.internName,
              parseInt(res.internId),
              res.internEmail,
              res.internSchool
            );
            teamArr.push(freshIntern);
            console.log(teamArr);
            addTeamMember();
          });
      }
      function generateHtml() {
        fs.writeFile("./dist/team.html", team(teamArr), (err) =>
          err
            ? console.error(err)
            : console.log("Thanks for using the team generator!")
        );
      }
    });
}
askQuestion();
