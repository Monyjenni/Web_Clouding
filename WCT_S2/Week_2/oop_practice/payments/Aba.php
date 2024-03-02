<?php
declare(strict_types=1);

require_once("IPayment.php");

class Aba implements IPayment {

    protected Float $amount;

    public function __construct($amount) {
        $this->amount = $amount;
    }

    // Call ABA API to pay
    public function pay(): bool
    {
        print("<p>ABA Pay: " . $this->amount . "</p>");
        return true;
    }

    public function getAmount(): Float {
        return $this->amount;
    }
}

?>