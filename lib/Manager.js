// importing Employee constructor 
const Employee = require('./Employee');

// manager constructor to employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // override employee role to manager 
    getRole () {
        return "Manager";
    }
}

// to be exported 
module.exports = Manager; 