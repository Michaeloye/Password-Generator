function passwordStrength(password) {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digit = "0123456789";
  const specialCharacter = "`~!@#\"'$%^&*()_-=+[]{};:,.<>?/|";

  let includesLowerCase = false;
  let includesUpperCase = false;
  let includesDigit = false;
  let includesSpecialCharacter = false;

  for (let i in password) {
    if (lowerCase.includes(password[i])) {
      includesLowerCase = true;
    }
    if (upperCase.includes(password[i])) {
      includesUpperCase = true;
    }
    if (digit.includes(password[i])) {
      includesDigit = true;
    }
    if (specialCharacter.includes(password[i])) {
      includesSpecialCharacter = true;
    }
  }
  
  let list = [includesLowerCase, includesUpperCase, includesDigit, includesSpecialCharacter];
  let listCount = {};

  for (let i of list) {
    listCount[i] = listCount[i] ? listCount[i] + 1: 1;
  }
  if (listCount[true] === 3) {
    return 'Good';
  }
  
}

export default passwordStrength;