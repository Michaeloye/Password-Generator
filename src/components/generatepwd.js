import shuffle from "./shuffle.js";
import getRndInteger from "./getRndInteger";

function generatepwd(length, lowercase, uppercase, number, specialcharacter) {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digit = "0123456789";
  const specialCharacter = "`~!@#\"'$%^&*()_-=+[]{};:,.<>?/|";
  let result = "";

  // make all arguments other than length an object value
  const choices = {
    lowercase,
    uppercase,
    number,
    specialcharacter,
  };

  const asArray = Object.entries(choices);

  const filtered = asArray.filter(([key, value]) => value);
  // returns filtered list with elements in the form [key, value]; where value is true

  // Convert the key/value array back to an object:
  //  { key: value, ...}
  // `{ name: 'Luke Skywalker', title: 'Jedi Knight' }`
  const filterChoice = Object.fromEntries(filtered);
  const filterChoiceKeys = Object.keys(filterChoice);

  // varibles for the loop
  let j = 0;
  let trace = 0;

  for (let i of filterChoiceKeys) {
    // normally if the length given by the user is used if it will loop by n times, but if it loops
    // by the length/the number of checked boxes, the result will be equal to the total length chosen by the user
    // e.g 10/2, loops 5 times with each respective choice appended 5 times, making a total of 10;

    let rand = getRndInteger(1, length / filterChoiceKeys.length);
    j += 1;

    for (
      let k = 0;
      k < (j !== filterChoiceKeys.length ? rand : length - trace);
      k++
    ) {
      if (i === "lowercase") {
        result += lowerCase.charAt(getRndInteger(0, lowerCase.length - 1));
      } else if (i === "uppercase") {
        result += upperCase.charAt(getRndInteger(0, upperCase.length - 1));
      } else if (i === "number") {
        result += digit.charAt(getRndInteger(0, digit.length - 1));
      } else if (i === "specialcharacter") {
        result += specialCharacter.charAt(
          getRndInteger(0, specialCharacter.length - 1)
        );
      }
    }
    // trace needs to start counting at the end of the first loop
    trace += rand;
  }
  if (length / filterChoiceKeys.length < 1)
    return shuffle(result).substring(0, length);

  return shuffle(result);
}
export default generatepwd;
