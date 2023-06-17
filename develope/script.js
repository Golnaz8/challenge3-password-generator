

var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?","@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "z"];

var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function passEntry(){

    var passGen = parseInt(window.prompt(`How many characters do you want in your password?`),10);


    if (isNaN(passGen)) {
        window.alert(`The entry is not a number,please try again.`);
        return null;
    }

    if (passGen<8 || passGen>128) {
        window.alert(`The length of your password should be between 8 and 128 character.`);
        return null;
    }

    var passNum = window.confirm(`Would you like  to have number in your password?`);
    var passSpecial = window.confirm(`Would you like to have special character in your password?`);
    var passUpper = window.confirm(`Would you like to have uppercase alphabet in your password?`);
    var passLower = window.confirm(`Would you like to have lowercase alphabet in your password?`);


    if (!passNum && !passSpecial && !passUpper && !passLower){
        window.alert(`You did not select any character type! please try again.`);
        return null;
    }


    var passwordEntry = {
        passGen: passGen,
        passNum: passNum,
        passSpecial: passSpecial,
        passUpper: passUpper,
        passLower: passLower
    };

    
    function printObject(objectName){
        var properties = Object.keys(objectName);
        for (i=0; i<properties.length; i++){
            var key = properties[i];
            console.log(`key: ${key} , value: ${objectName[key]}`);
        }
    }
    printObject(passwordEntry);
    return passwordEntry;

}

function generateRandom(array) {
    var randomChar = Math.floor(Math.random() * array.length);
    return array[randomChar];
}


function generatePassword() {
    var userChoice = passEntry();
    var characterIncluded = [];
    var final = [];
    var checkAllTypes= [];

    if (userChoice.passNum){
        characterIncluded = characterIncluded.concat(numChar);
        checkAllTypes.push(generateRandom(numChar));
    }
    if (userChoice.passSpecial){
        characterIncluded = characterIncluded.concat(specialChar);
        checkAllTypes.push(generateRandom(specialChar));
    }
    if (userChoice.passUpper){
        characterIncluded = characterIncluded.concat(upperChar);
        checkAllTypes.push(generateRandom(upperChar));
    }
    if (userChoice.passLower){
        characterIncluded = characterIncluded.concat(lowerChar);
        checkAllTypes.push(generateRandom(lowerChar));
    }

    for(i=0; i<userChoice.passGen; i++){
        var characters = generateRandom(characterIncluded);
        final.push(characters);
    }

    for(i=0; i<checkAllTypes.length; i++){
        var index = Math.floor(Math.random()*characterIncluded.length);
        characterIncluded[index] = checkAllTypes[i];
    }
    return final;
}


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
