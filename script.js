// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {

  // 4 arrays of characters: lower case, upper case, numbers and symbols
  var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numbers = "1234567890".split("");
  var special = "!@#$%^&*-+".split("");
  // final password array container
  var finalPass = [];
  var result = "";

  // user input
  // prompt user to chose password length
  var passwordLength = window.prompt("Choose a length of at least 8 characters and no more than 128 characters");
  // check for right password length and if a number was used
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a valid number between 8 and 128");
    return "";
  }
  // ask user which characters to use
  var isLowercase = confirm("Do you want lowercase letters?");
  var isUppercase = confirm("Do you want uppercase letters?");
  var isNumbers = confirm("Do you want numbers?");
  var isSpecials = confirm("Do you want special characters?");
  // return if no characters are chosen
  if (!(isLowercase || isUppercase || isNumbers || isSpecials)) {
    alert("You have to choose at least one character option.");
    return "";
  }

  // for loop to generate each character
  for (let i = 0; i < passwordLength; i++) {

    // use math random function to generate random selection
    if (isLowercase) {
      var randomCharacter = Math.floor(Math.random() * 26)
      finalPass.push(lowercase[randomCharacter])
    }

    if (isUppercase) {
      var randomCharacter = Math.floor(Math.random() * 26)
      finalPass.push(uppercase[randomCharacter])
    }

    if (isNumbers) {
      var randomCharacter = Math.floor(Math.random() * 10)
      finalPass.push(numbers[randomCharacter])
    }

    if (isSpecials) {
      var randomCharacter = Math.floor(Math.random() * 10)
      finalPass.push(special[randomCharacter])
    }

    // . join() removes commas from array
    result = finalPass.join("");

  }

  // returns result with .slice() method keeping password length to selected number
  return result = result.slice(0, passwordLength);

}