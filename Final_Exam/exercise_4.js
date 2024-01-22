function rectangleInCircle(width, height, radius) {
  //អង្កត់ទ្រូង​ d = sqr of wˆ2 + hˆ2
  const d = Math.sqrt(width ** 2 + height ** 2);

  // Diameter of circle = r * 2
  const circleDiameter = radius * 2;

  // check d and dia of circle
  return d <= circleDiameter;
}

console.log('Fit Rectangle in Circle will return :  True ')
console.log(' Not Fit Rectangle in Circle will return:  False' +  '\n')

console.log(rectangleInCircle(8, 6, 5)); 
//false because , d = 10.2 and dia or cir= 10
console.log(rectangleInCircle(5, 9, 5));
// false because, d = 8.06 and dia of cir = 8
console.log(rectangleInCircle(4, 7, 4));
