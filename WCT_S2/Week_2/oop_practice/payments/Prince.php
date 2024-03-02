<?php
declare(strict_types=1);

require_once("IPayment.php");

class Prince implements IPayment {

    public function __construct(
        public Float $total = 0.0
    ) {}

    public function pay(): bool
    {
        print("<p>Prince Pay: " . $this->total . "</p>");
        return true;
    }

    public function getAmount(): Float {
        return $this->total;
    }
}

?>