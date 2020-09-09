const Payment = require('./Payment');

class Card extends Payment {
  constructor(number, cvv, date) {
    super();
    this.number = number;
    this.cvv = cvv;
    this.date = date;
  }
}

module.exports = Card;