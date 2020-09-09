require 'account.php';
require 'car.php';

echo 'Uber';

$car = new Car('XWLZ5', new Account('John Connor', 'CURP'));

$car->printDataCar();