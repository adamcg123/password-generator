// Assignment code here

var generateBtn = document.querySelector("#generate");




// Write password to the #password input



    function writePassword() {
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

 













  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
