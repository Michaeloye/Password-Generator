import shuffle from "./shuffle.js";
import getRndInteger from "./getRndInteger";

function generatepwd(length, lowercase, uppercase, number, specialcharacter) {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let digit = "0123456789";
  let specialCharacter = "`~!@#$%^&*()_-=+[]{};:,.<>?/|";
  let result = "";

  if (lowercase && !uppercase && !number && !specialcharacter) {
    for (let i = 0; i < length; i++) {
      result += lowerCase.charAt(getRndInteger(0, lowerCase.length - 1));
    }
  } else if (lowercase && uppercase && !number && !specialcharacter) {
    let charLength = getRndInteger(1, length / 2);
    length = length - charLength;
    for (let i = 0; i < charLength; i++) {
      result += lowerCase.charAt(getRndInteger(0, lowerCase.length - 1));
    }
    for (let i = 0; i < length; i++) {
      result += upperCase.charAt(getRndInteger(0, upperCase.length - 1));
    }
  } else if (lowercase && uppercase && number && !specialcharacter) {
    let charLength1 = getRndInteger(1, length / 3);
    let charLength2 = getRndInteger(1, length / 3);
    length = length - (charLength1 + charLength2);
    for (let i = 0; i < charLength1; i++) {
      result += lowerCase.charAt(getRndInteger(0, lowerCase.length - 1));
    }
    for (let i = 0; i < charLength2; i++) {
      result += upperCase.charAt(getRndInteger(0, upperCase.length - 1));
    }
    for (let i = 0; i < length; i++) {
      result += digit.charAt(getRndInteger(0, digit.length - 1));
    }
  } else if (lowercase && uppercase && number && specialcharacter) {
    let charLength1 = getRndInteger(1, length / 4);
    let charLength2 = getRndInteger(1, length / 4);
    let charLength3 = getRndInteger(1, length / 4);
    length = length - (charLength1 + charLength2 + charLength3);
    for (let i = 0; i < charLength1; i++) {
      result += lowerCase.charAt(getRndInteger(0, lowerCase.length - 1));
    }
    for (let i = 0; i < charLength2; i++) {
      result += upperCase.charAt(getRndInteger(0, upperCase.length - 1));
    }
    for (let i = 0; i < charLength3; i++) {
      result += digit.charAt(getRndInteger(0, digit.length - 1));
    }
    for (let i = 0; i < length; i++) {
      result += specialCharacter.charAt(getRndInteger(0, specialCharacter.length - 1))
    }
  } else return "asdf";

  return shuffle(result);
}
export default generatepwd;
