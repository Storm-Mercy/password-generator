// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assignment Code
var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

var hasNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var hasLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var hasUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function userInput() {
  var length = parseInt(prompt("Enter the length of your password"), 10);
  console.log(length);
  if (Number.isNaN(length)) {
    alert("It has to be a number!");
    return null;
  }
  if (length < 8 || length > 128) {
    alert("It has to be at least 8 and no more than 128!");
    return null;
  }

  var confirmNumbers = confirm("Click ok to include numbers");
  console.log(confirmNumbers);

  var confirmSpecial = confirm("Click ok to include special characters");
  console.log(confirmSpecial);

  var confirmUpper = confirm("Click ok to inculde uppercase characters");
  console.log(confirmUpper)

  var confirmLower = confirm("Click ok to inculde lowercase characters");
  console.log(confirmLower)

  if (confirmNumbers === false && confirmSpecial === false && confirmUpper === false && confirmLower === false) {
    alert("You have to choose at least one!")
    return null;
  }
  var answers = {
    length: length,
    confirmNumbers: confirmNumbers,
    confirmSpecial: confirmSpecial,
    confirmUpper: confirmUpper,
    confirmLower: confirmLower,
  };
  return answers;
}

function getRandom(arr) {
  var indexRandom = Math.floor(Math.random() * arr.length);
  var randomValue = arr[indexRandom];
  return indexRandom;
}

function generatePassword() {
  var options = userInput();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (!options) return null;

  if (options.confirmNumbers) {
    possibleCharacters = possibleCharacters.concat(hasNumbers);
    guaranteedCharacters.push(getRandom(hasNumbers));
  }
  if (options.confirmSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  if (options.confirmUpper) {
    possibleCharacters = possibleCharacters.concat(hasUpperCase);
    guaranteedCharacters.push(getRandom(hasUpperCase));
  }
  if (options.confirmLower) {
    possibleCharacters = possibleCharacters.concat(hasLowerCase);
    guaranteedCharacters.push(getRandom(hasLowerCase));
  }
  for (var i = 0; i < options.length; i++) {
    var possibleCharacters = getRandom(possibleCharacters);
    result.push(possibleCharacters);
  }
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
  return result.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

