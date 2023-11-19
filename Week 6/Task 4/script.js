function sum() {
  var sumResult = 0;

  for (var i = 0; i < arguments.length; i++) {
    sumResult += arguments[i];
  }

  return sumResult;
}

function calculateSum() {
  var inputElement = document.getElementById('numbersInput');
  var inputNumbers = inputElement.value.split(',').map(Number);

  if (inputNumbers.length === 0) {
    alert('Please enter numbers to calculate the sum.');
    return;
  }

  var resultElement = document.getElementById('sumResult');
  resultElement.textContent = 'Sum Result: ' + sum(...inputNumbers);
}
