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
function generatePassword(length = 8) {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
   
  var pword =  new Array ();

   for (var i = 0; i < length; i++) {
     var index = Math.floor(Math.random() * lowerCase.length);
     pword.push(lowerCase.charAt(index));
   }

   pword = pword.join("")
  return pword
}