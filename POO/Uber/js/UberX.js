const Car = require('./Car.js');

class UberX extends Car {

  constructor(licence, driver, brand, model) {
    super(licence, driver)
    this.brand = brand;
    this.model = model;
  }

}

module.exports = UberX;