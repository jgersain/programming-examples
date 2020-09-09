<?php

class Car {
  public $id;
  public $licence;
  public $driver;
  public $passenger;

  public function __construct($licence, $driver) {
    $this->licence = $licence;
    $this->driver = $driver;
  }

  public function printDataCar() {
    echo 'Licence: '.$this->licence.' Driver: '.$this->driver->name; 
  }
}

?>