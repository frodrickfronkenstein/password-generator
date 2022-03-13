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

// Function to generate password
function generatePassword(length) {
  // prompts user to determine length of password
  var length = prompt("how many characters long do you need your password to be? min. 8, max 128");
  // prompt if no answer is provided
  if (length === "" || null) {
    alert("kinda need an answer on this one");
    return generatePassword(length);
  }
  // if answer is provided
  length = parseInt(length);

  // if length given is less than 8 characters
  if (length < 8) {
    alert("password needs to be longer. min. 8 characters");
    return generatePassword(length);
  }

  // if length given is more than 128 characters
  if (length > 128) {
    alert("password is too long. max. 128 characters");
    return generatePassword(length);
  }
 
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialCharacters = "~`!@#$%^&*()-_=+{[}]\|;:',<.>/?"
  var pInputs = "";

  // prompt for inclusion of lower case letters in password
  var lowerCaseAddition = confirm("would you like your password to include lower case letters?");
  if (lowerCaseAddition) {
    pInputs += lowerCase;
  }

  // prompt for inclusion of upper case letters in password
  var upperCaseAddition = confirm("would you like your passwords to include upper case letters?");
  if (upperCaseAddition) {
    pInputs += upperCase;
  }
  // prompt for inclusion of numbers in password
  var numbersAddition = confirm("would you like your password to include numbers?");
  if (numbersAddition) {
    pInputs += numbers;
  }
  // prompt for inclusion of special characters in password
  var specialCharactersAddition = confirm("would you like your password to include special characters?");
  if (specialCharactersAddition) {
    pInputs += specialCharacters;
  }
  // prompt incase no type of character was selected
  if (pInputs === "" || null) {
    alert("Can't generate a password without any characters.  Please try again, and select at least one type of character.");
    return generatePassword();
  }
  
  // at long last, generate the password
  var pword =  new Array ();

   for (var i = 0; i < length; i++) {
     var index = Math.floor(Math.random() * pInputs.length);
     pword.push(pInputs.charAt(index));
   }

   pword = pword.join("")
  return pword
}