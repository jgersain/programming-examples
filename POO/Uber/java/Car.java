class Car {
  private Integer id;
  private String licence;
  private Account driver;
  private Integer passenger;  

  public Car(String licence, Account driver) {
    this.licence = licence;
    this.driver = driver;
  }

  void printDataCar() {
    if (passenger != null) {
      System.out.println("Licence: " + licence + " Driver: " +  driver.name + " Passenger: " + passenger);
    }
  }

  public Integer getPassenger() {
    return passenger;
  }

  public void setPassenger(Integer passenger) {
    if (passenger == 4) {
      this.passenger = passenger;
    } else {
      System.out.println("El número de pasajeros debe de ser 4");
    }
  }
}
