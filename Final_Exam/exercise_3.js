function removeSpecialCharacters(inputString) {
  const allowedCharactersRegex = /[a-zA-Z0-9-_ ]/g;
  const cleanedString = inputString.replace(/[^a-zA-Z0-9-_ ]/g, '');
  return cleanedString;
}

console.log("Clean String Except Dash and Underscore: " + '\n')
console.log(removeSpecialCharacters("Thequickbrownfox!-"));
console.log(removeSpecialCharacters("%fd76$fd(-)6_GvKlO."));
console.log(removeSpecialCharacters("D0n$csed0di0du1"));
