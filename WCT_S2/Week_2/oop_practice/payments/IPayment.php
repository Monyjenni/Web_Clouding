<?php

declare(strict_types=1);

interface IPayment {
    function pay(): bool;
    function getAmount(): Float;
}

?>