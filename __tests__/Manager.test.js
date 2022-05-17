// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager   
it('creates an Manager object', () => {
    const manager = new Manager('Matt', 2, 'Matt.Wilder@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// getRole()
it('gets role of employee', () => {
    const manager = new Manager('Matt', 2, 'Matt.Wilder@gmail');

    expect(manager.getRole()).toEqual("Manager");
}); 