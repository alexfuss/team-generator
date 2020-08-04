// TODO: Write code to define and export the Employee class
class Employee {
    // Create a constructor that defines the information within the Employee class

    constructor(name, id, email) {
        if(typeof name !== "string" || !name.trim().length) {
            throw new Error("Name should not be an empty string.");
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    // The below functions will grab all the employee information
    getName() {
        console.log(`Employee Name: ${this.name}`);

        return this.name;
    };

    getId() {
        console.log(`Employee ID: ${this.id}`);

        return this.id;
    };

    // Update this function on App page to ensure undefined does not show
    getEmail() {
        console.log(`Employee Email: ${this.email}`);
    };

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;