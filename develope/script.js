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




var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?","@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



 function passEntry(){

    var passGen = parseInt(window.prompt(`how many characters you want in your password?`),10);


    if (isNaN(passGen)) {
        window.alert(`The entry is not a number,please try again.`);
        passEntry();
    }else if (passGen<8 || passGen>128) {
        window.alert(`The length of your pass should be between 8 and 128 character.`);
        passEntry();
    }else {
        questions();
    }


    function questions(){

        var passNum = window.confirm(`do you want to have number in your pass?`);
        var passSpecial = window.confirm(`do you want to have special character in your pass?`);
        var passUpper = window.confirm(`do you want to have uppercase alphabet in your pass?`);
        var passLower = window.confirm(`Do you want to have lowercase alphabet in your pass?`);

            
    if (!passNum && !passSpecial && !passUpper && !passLower){
        window.alert(`you did not select any character type.please try again.`);
        return null;
        
    }

    password = "";
    if (passNum && passSpecial && passUpper && passLower) {

         for (var i = 0; i <passGen; i++) {
            var randomNumber = Math.floor(Math.random() * numChar.length);
            password = password.concat(randomNumber);
         }
         console.log(password);
    }
    }

 
 }
 passEntry();
