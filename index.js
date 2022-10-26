const inquire = require("inquirer")
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

function askQuestion() {
    inquirer.prompt([
        {
            name: "question",
            type: "list",
            choices: ["Add a Trainer", "Add a Pokemon", "See all Pokemon", "Get Random Pokemon", "Battle", "Heal", "quit"]
        }
    ]).then(answers => {
        switch (answers.question) {
            case "Add a Trainer":
                console.log("add trainer!")
                addTrainer();
                break;

            case "Add a Pokemon":
                console.log("add pokemon selected!")
                addPokemon();
                break;

            case "See all Pokemon":
                console.log("add pokemon selected!")
                showPokemon();
                break;

            case "Get Random Pokemon":
                console.log("random!")
                getRandomPokemon()
                break;

            case "Battle":
                console.log("battle!")
                battle()
                break;

            case "Heal":
                console.log("battle!")
                heal()
                break;

            default:
                console.log("thanks for playing!")
                break;
        }
    })
}