// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name,id,email,github) {

        super(name,id,email)
        this.name=name
        this.id=id
        this.email=email
        this.github=github

    }

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }
    printInfo() {
        console.log(`
        Name: ${this.name}
        ID: ${this.id}
        Email: ${this.email}
        Github: ${this.github}
        `)
    }
}
// const engineer = new Engineer("bryce", 47,"bryce@bryce.bryce","bmckenzie88")
// engineer.printInfo()

module.exports = Engineer