function employeeInformation(employees) {
    const { name: secondEmployeeName, department: secondEmployeeDepartment } = employees[1];
    return { secondEmployeeName, secondEmployeeDepartment };
}

const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(employeeInformation(employees)); 
// Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }

function averageSalary(employees) {
    let totalSalary = 0;
    for (const { salary } of employees) {
        totalSalary += salary;
    }
    return totalSalary / employees.length;
}

const employees1 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(averageSalary(employees)); 
// Output: 60000

function thirdEmployeeInfo(employees) {
    const { name: thirdEmployeeName, age: thirdEmployeeAge, salary: thirdEmployeeSalary } = employees[2];
    const bonus = thirdEmployeeSalary * 0.1;
    return `Employee: ${thirdEmployeeName}, Age: ${thirdEmployeeAge}, Salary: ${thirdEmployeeSalary}, Bonus: ${bonus}`;
}

const employees2 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(thirdEmployeeInfo(employees)); 
// Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"
