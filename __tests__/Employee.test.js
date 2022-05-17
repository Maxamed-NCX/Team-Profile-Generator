// using Employee constructor 
const Employee = require('../lib/Employee');

// creates employee  
it('creates an employee object', () => {
    const employee = new Employee('Matt', 2, 'Matt.Wilder@gmail');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// getName() 
it('gets employee name', () => {
    const employee = new Employee('Matt', 2, 'Matt.Wilder@gmail');

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getName()).toEqual("Matt");
});

// getId() 
it('gets employee ID', () => {
    const employee = new Employee('Matt', 2, 'Matt.Wilder@gmail');

    expect(employee.getId()).toEqual(expect.any(Number));
});

//  getEmail()
it('gets employee email', () => {
    const employee = new Employee('Matt', 2, 'Matt.Wilder@gmail');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//  getRole()
it('gets role of employee', () => {
    const employee = new Employee('Matt', 2, 'Matt.Wilder@gmail');

    expect(employee.getRole()).toEqual("Employee");
}); 

