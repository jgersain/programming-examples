class Main {
  public static void main(String[] args) {
    System.out.println("Uber Objects");
    
    UberX uberX = new UberX("XWLZ5", new Account("John Connor", "OOMG121"), "Chevrolet", "Onix");
    uberX.setPassenger(4);
    uberX.printDataCar();
  }
}