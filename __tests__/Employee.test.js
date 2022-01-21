const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee;

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets the name of the employee', () => {
    const employee = new Employee;

    expect(employee.getName()).toEqual(expect.any(String));;
});

test('gets the id of the employee', () => {
    const employee = new Employee;

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets the email of the employee', () => {
    const employee = new Employee;

    expect(employee.getEmail()).toEqual(expect.any(String));
});

// test('gets the role or returns the employee', () => {
//     const employee = Employee;

//     expect(employee.getRole()).toEqual("Employee");
// })