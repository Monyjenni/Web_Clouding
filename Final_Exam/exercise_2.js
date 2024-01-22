function addNums(numbersString) {
  const numbersArray = numbersString.split(/[,\s]+/).map(Number);
  const totalSum = numbersArray.reduce((sum, num) => sum + num, 0);
  return totalSum;
}

console.log('Sum all values in String: '+ '\n')

console.log(addNums("2,5,1,8,4"));         
console.log(addNums("1,2,3,4,5,6, 7"));      
console.log(addNums("21 0"));                
console.log(addNums("10 20 30 40 50"));     
console.log(addNums("2, 3 5, 7, 11")); 
