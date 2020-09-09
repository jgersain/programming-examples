class Car {
  private $id;
  private $licence;
  private $driver;
  private $passenger;

  public function __construct($licence, $driver) {
    $this->$licence = $licence;
    $this->$driver = $driver;
  }

  public function printDataCar() {
    echo 'Licence: '+ $licence + ' Driver: ' + $driver->$name; 
  }
}