const Employee = require('./employee');

class Intern extends Employee{
    constructor(name, empID, email, school) {
        super(name,empID, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

}

module.exports = Intern;