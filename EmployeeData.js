var employees = [];

function employee(name, jobTitle, salary, status = "Full Time"){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
};
function printEmployeeForm(employees){
    console.log("Name: " + employees.name + " " + "Job Title: " + employees.jobTitle + " " + "Salary: " + employees.salary + " " + "Status: " + employees.status)
};
var employee1 = new employee("Billy", "Accountant", "80/hour");
var employee2 = new employee("Jane", "Editor", "50/hour");
employee2.status = "Contract";
var employee3 = new employee("Alex", "Journalist", "70/hour");

console.log(printEmployeeForm(employee1));
console.log(printEmployeeForm(employee2));
console.log(printEmployeeForm(employee3));

function inputEmployee(){
    employees.push(employee1, employee2, employee3);
    return employees;
}
console.log(inputEmployee());
