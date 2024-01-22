function isVowelSandwich(str) {
  // Ensure the input is a string with exactly 3 characters
  if (typeof str !== 'string' || str.length !== 3) {
    console.error('Param must be 3 characters!');
    return false;
  }

  const firstChar = str[0].toLowerCase();
  const middleChar = str[1].toLowerCase();
  const lastChar = str[2].toLowerCase();
  const isConsonant = char => /^[b-df-hj-np-tv-z]$/.test(char);

  if (isConsonant(firstChar) && isConsonant(lastChar) && /[aeiou]/.test(middleChar)) {
    return true;
  } else {
    return false;
  }
}

console.log('3 characters validation:' + '\n')
console.log('cat is ',isVowelSandwich('cat'));
console.log('dog is ',isVowelSandwich('dog'));
console.log('elephant is ',isVowelSandwich('elephant'));

