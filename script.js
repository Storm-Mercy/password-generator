// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assignment Code
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var hasNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var hasLowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var hasUpperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Enter the length of your password");
  console.log(passwordLength);

  var hasNumbers = confirm("Include Numbers?");
  console.log(hasNumbers);

  var specialCharacters = confirm("Include special characters?");
  console.log(specialCharacters);

  var hasUpperCase = confirm("Inculde uppercase");
  console.log(hasUpperCase)

  var hasLowerCase = confirm("Inculde lowercase");
  console.log(hasLowerCase)
}

for( var i = 0; i < hasNumbers.length; i++)



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
