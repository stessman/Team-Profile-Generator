const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name, empID, email, githubUsername) {
        super(name,empID, email);
        this.githubUsername = githubUsername;
    }

    getGitHubUsername() {
        return this.githubUsername;
    }

    getRole() {
        return 'Engineer';
    }

}
module.exports = Engineer;