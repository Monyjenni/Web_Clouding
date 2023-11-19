function convertNumberToWords() {
  // Get the input value
  const numberInput = document.getElementById('numberInput').value;

  // Define an array for the words
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  // Convert each digit to its corresponding word
  const result = numberInput.split('').map(digit => words[parseInt(digit)]).join('');

  // Display the result
  document.getElementById('output').textContent = result;
}
