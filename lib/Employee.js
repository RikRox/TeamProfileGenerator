class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole() {
        return 'Employee';
    }


};



// Employee.prototype.getId = function() {
//     return `ID: ${this.id}`;
// }

// Employee.prototype.getEmail = function() {
//     return `Email: ${this.email}`;
// }





module.exports = Employee;