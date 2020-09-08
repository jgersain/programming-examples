const Car = require('./Car.js');
const Account = require('./Account.js');

console.log("Uber JS");

var car = new Car("WSXYT", new Account("John Connor", "CURP"));
car.printDataCar();