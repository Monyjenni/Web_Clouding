<?php
declare(strict_types=1);

require_once("payments/IPayment.php");

class Wing implements IPayment {
    protected Float $amount;

    public function __construct($amount) {
        $this->amount = $amount;
    }

    // Call Wing API to pay
    public function pay(): bool
    {
        print("<p>Wing Pay: " . $this->amount . "</p>");
        return true;
    }

    public function getAmount(): Float {
        return $this->amount;
    }
}

?>