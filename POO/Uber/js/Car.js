// function Car(licence, driver) {
//   this.id;
//   this.licence = licence;
//   this.driver = driver;
//   this.passenger;
// }

// Car.prototype.printDataCar = function() {
//   console.log("Licence: " + this.licence + " Driver: " + this.driver.name)
// }

class Car {
  constructor (licence, driver) {
    this.id;
    this.licence = licence;
    this.driver = driver;
    this.passenger;
  }

  printDataCar() {
    console.log("Licence: " + this.licence + " Driver: " + this.driver.name);
  }
}

module.exports = Car;