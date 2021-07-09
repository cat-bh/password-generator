// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = 0;
var includeLowercase = false;
var includeUppercase = false;
var includeNumbers = false;
var includeSpecialChar = false;

var selectedCharacters = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "! #$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Reset variables
  passwordLength = 0;
  selectedCharacters = "";
  includeLowercase = false;
  includeUppercase = false;
  includeNumbers = false;
  includeSpecialChar = false;
}

function generatePassword() {
  gatherCriteria();

  // Add characters that the user selected to a common string
  if (includeLowercase) {
    selectedCharacters = selectedCharacters.concat(lowercase);
  }
  if (includeUppercase) {
    selectedCharacters = selectedCharacters.concat(uppercase);
  }
  if (includeNumbers) {
    selectedCharacters = selectedCharacters.concat(numbers);
  }
  if (includeSpecialChar) {
    selectedCharacters = selectedCharacters.concat(specialCharacters);
  }

  var newPassword = "";

  // Choose random characters
  for (var i = 0; i < passwordLength; i++) {
    var randomChar = selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
    newPassword = newPassword.concat(randomChar);
  }

  console.log(newPassword);
  return newPassword;
}

function gatherCriteria() {
  // Ask for length and check it is a number
  while (passwordLength < 8 || passwordLength > 128) {
    var userInput = prompt("How long would you like your password to be? Must be at least 8 and no more than 128");
    
    if (isNaN(userInput) || userInput === "" || !userInput) {
      alert("Please enter a number!");
    } else {
      passwordLength = parseInt(userInput);
    }
  }
  
  // Prompt user to choose at least one criteria
  while (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChar) {
    includeLowercase = confirm("Would you like your password to include lowercase letters?");
    includeUppercase = confirm("Would you like your password to include uppercase letters?");
    includeNumbers = confirm("Would you like your password to include numbers?");
    includeSpecialChar = confirm("Would you like your password to include special characters? (! #$%&'()*+,-./:;<=>?@[\]^_`{|}~)");
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChar) {
      alert("Please select at least one option!");
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
