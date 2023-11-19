function checkPalindrome() {
  const numberInput = document.getElementById('numberInput').value;
  const resultDiv = document.getElementById('result');

  if (isPalindrome(numberInput)) {
    resultDiv.textContent = `${numberInput} is a palindrome number.`;
  } else {
    resultDiv.textContent = `${numberInput} is not a palindrome number.`;
  }
}

function isPalindrome(number) {
  const numberString = String(number);
  const reversedString = numberString.split('').reverse().join('');
  return numberString === reversedString;
}


