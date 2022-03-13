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
  if (length === "" || null) {
    alert("kinda need an answer on this one");
    return generatePassword(length);
  }
  length = parseInt(length);

  if (length < 8) {
    alert("password needs to be longer. min. 8 characters");
    return generatePassword(length);
  }

  if (length > 128) {
    alert("password is too long. max. 128 characters");
    return generatePassword(length);
  }
 
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialCharacters = "~`!@#$%^&*()-_=+{[}]\|;:',<.>/?"
   
  var pword =  new Array ();

   for (var i = 0; i < length; i++) {
     var index = Math.floor(Math.random() * lowerCase.length);
     pword.push(lowerCase.charAt(index));
   }

   pword = pword.join("")
  return pword
}