const Car = require('./Car.js');
const Account = require('./Account.js');
const UberX = require('./UberX.js');
const UberBlack = require('./UberBlack.js');

console.log("Uber JS");

var car = new Car("WSXYT", new Account("John Connor", "CURP"));
car.printDataCar();

const uberX = new UberX("LIC009", new Account("Johny Deep", "RFC001"), "Chevrolet", "Seat");
uberX.printDataCar();

const uberBlack = new UberBlack("LIC99887", new Account("Johny Bravo", "INE0009"), ["Chevy", "Chevrolet"], ["Cartón"]);
uberBlack.printDataCar();