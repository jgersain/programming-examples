class Main {
  public static void main(String[] args) {
    Car car = new Car("XWLZ5", new Account("John Connor", "OOMG121"));
    car.printDataCar();
    Car car2 = new Car("ABCDE", new Account("John Cena", "UNAMMX"));
    car2.printDataCar();
  }
}