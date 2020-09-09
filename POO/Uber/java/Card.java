public class Card extends Payment{
  Integer number;
  String cvv;
  String date;

  public Card(Integer number, String cvv, String date) {
    super();
    this.number = number;
    this.cvv = cvv;
    this.date = date;
  }
}
