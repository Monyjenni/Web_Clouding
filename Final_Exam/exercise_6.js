function packedBoxes(items) {
  if (!Number.isInteger(items) || items < 0) {
    console.error('Must be a non-negative integer.');
    return [];
  }

  const packedBoxesArray = [];

  while (items >= 5) {
    packedBoxesArray.push(5);
    items -= 5;
  }

  while (items >= 3) {
    packedBoxesArray.push(3);
    items -= 3;
  }

  return items === 0 ? packedBoxesArray : [];
}

console.log('Box Division' + '\n')
console.log(packedBoxes(8));   
console.log(packedBoxes(7));   
console.log(packedBoxes(13));  
console.log(packedBoxes(-3));  
console.log(packedBoxes(18)); 
