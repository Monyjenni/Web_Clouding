function filterNonPositiveIntegers(userInputArray) {
  if (!Array.isArray(userInputArray)) {
    console.error('Input is not an array.');
    return [];
  }

  return userInputArray.filter(element => {
    return Number.isInteger(element) && element > 0;
  });
}

const testingArray = [1, 'apple', 3, 'banana', 5, 7, 'orange', '%', 9, '1',-1];
const resultArray = filterNonPositiveIntegers(testingArray);

console.log("Positive Integer Only" + '\n')
console.log(resultArray);
