class Employee {
    constructor(name) {
        this.name = name
    }
}
class EmployeeFactory {
    create(name) {
        let employee = new Employee(name)
        return employee
    }
}
let employee = new EmployeeFactory().create("mohamed mahdi");
console.log(employee.name);