const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, enail, school) {
        super(name, id, enail)

        this.school = school;
    }

    getSchool() {
        return {
            school: this.school
        };
    };

    getRole() {
        return "Intern"
    };
}

module.exports = Intern;