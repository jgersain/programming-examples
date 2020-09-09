<?php
require_once('account.php');
require_once('car.php');
require_once('uberX.php');
require_once('uberPool.php');
require_once('uberBlack.php');
require_once('uberVan.php');

echo '### Uber ###';

$uberX = new UberX('WWLZ5', new Account('John Connor', 'CURP'), 'Chevy', 'Spark');
$uberPool = new UberPool('XWLZ4', new Account('John Cena', 'RFC'), 'Dodge', 'Attitude');
$uberBlack = new UberBlack('YWLZ3', new Account('John Travolta', 'ID'), ['Ferrari'], ['Lana']);
$uberVan = new UberVan('ZWLZ2', new Account('John Deep', 'SBN'), ['Chetos'], ['Lana', 'Papel']);

$uberX->printDataCar();
$uberPool->printDataCar();
$uberBlack->printDataCar();
$uberVan->printDataCar();

?>