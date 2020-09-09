const Payment = require('./Payment');

class Paypal extends Payment {
  constructor(email) {
    super();
    this.email = email
  }
}

module.exports = Paypal;