<?php

declare(strict_types=1);

ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

require_once("payments/Aba.php");
require_once("payments/Prince.php");
require_once("Wing.php");

$payments = [
    new Aba(5.0),
    new Prince(3.0),
    new Prince(5.5),
    new Wing(10.0),
    new Aba(7.0),
    new Aba(2.5),
    new Wing(5.2)
];

echo "<h2>All Donations:</h2>";
foreach ($payments as $payment) {
    $payment->pay();
}

echo "<h2>Sort Donations by amount DESC:</h2>";
$length = count($payments);
for ($i = 0; $i < $length - 1; $i++) {
    for ($k = $i + 1; $k < $length; $k++) {
        if ($payments[$i]->getAmount() < $payments[$k]->getAmount()) {
            $temp = $payments[$i];
            $payments[$i] = $payments[$k];
            $payments[$k] = $temp;
        }
    }
}
foreach ($payments as $payment) {
    $payment->pay();
}


?>