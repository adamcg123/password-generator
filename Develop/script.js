// Assignment code here

var generateBtn = document.querySelector("#generate");




// Write password to the #password input



function generatePassword() {
    var lwrcase = "abcdefghijklmnopqrstuvwxyz";
    var upprcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "1234567890";
    var spclchrcter = "!@#$%^&*()_-+=[]{};:,.<>/?`~";
    var password = "";
    var avlblcharctrs = "";


var pwlength = prompt("please select a character amount for your password between 8 and 128.")
// does it meet the length requirements?
if (pwlength >= 8 && pwlength <=128) {
  console.log(pwlength)
}    
else {
  alert("Your password has to be a min of 8 characters and a max of 128")
  return "";
}

var qrylwrcase = confirm("Would you like to use lowercase letters in your password?")
var qryupprcase = confirm("Would you like to use uppercase letters in your password?")
var qrynumbers = confirm("Would you like to use numbers in your password (0-9)?")
var qryspclchrcter = confirm("Would you like to use special characters such as '!@#$%^&*()_-+=[]{};:,.<>/?`~' in your password?")

if (qrylwrcase) {
  avlblcharctrs += lwrcase
}

if (qryupprcase) {
  avlblcharctrs += upprcase
}

if (qrynumbers) {
  avlblcharctrs += numbers
}

if (qryspclchrcter) {
  avlblcharctrs += spclchrcter
}

if (!qrylwrcase && !qryupprcase && !qrynumbers && !qryspclchrcter
) {
  return alert("Please select at least one criteria!");
}

for (let i = 0; i < pwlength; i++) {

  password +=avlblcharctrs[Math.floor(Math.random () * avlblcharctrs.length)];
}
return password;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
