<?php
require_once('payment.php');

class Card extends Payment {
  public $number;
  public $cvv;
  public $date;

  public function __construct($number, $cvv, $date) {
    parent::__construct();
    $this->number = $number;
    $this->cvv = $cvv;
    $this->date = $date;
  }
}

?>