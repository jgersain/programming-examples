const Car = require('./Car.js');

class UberBlack extends Car {

  constructor(licence, driver, typeCarAccepted, seatsMaterial) {
    super(licence, driver)
    this.typeCarAccepted = typeCarAccepted;
    this.seatsMaterial = seatsMaterial;
  }

}

module.exports = UberBlack;