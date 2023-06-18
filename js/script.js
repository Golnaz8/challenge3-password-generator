
//define all character types
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?","@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "z"];

var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//in this function we ask questions and return five answer(how long password and which type of character)
function passEntry(){
    //chenge the string user answer to number and save it
    var passGen = parseInt(window.prompt(`How many characters do you want in your password?`),10);

    //if the inpute is not a number, alert an do nothing
    if (isNaN(passGen)) {
        window.alert(`The entry is not a number,please try again.`);
        return null;
    }
    
    //check the lenghth of password
    if (passGen<8 || passGen>128) {
        window.alert(`The length of your password should be between 8 and 128 character.`);
        return null;
    }
    //questions to know which type of character user wants
    var passNum = window.confirm(`Would you like  to have number in your password?`);
    var passSpecial = window.confirm(`Would you like to have special character in your password?`);
    var passUpper = window.confirm(`Would you like to have uppercase alphabet in your password?`);
    var passLower = window.confirm(`Would you like to have lowercase alphabet in your password?`);

    //if user selects none of them,alert
    if (!passNum && !passSpecial && !passUpper && !passLower){
        window.alert(`You did not select any character type! please try again.`);
        return null;
    }

    //save all answers in an object 
    var passwordEntry = {
        passGen: passGen,
        passNum: passNum,
        passSpecial: passSpecial,
        passUpper: passUpper,
        passLower: passLower
    };

    //this part is just for checking if code works in console or not, and return user's answers
    function printObject(objectName){
        var properties = Object.keys(objectName);
        for (i=0; i<properties.length; i++){
            var key = properties[i];
            console.log(`key: ${key} , value: ${objectName[key]}`);
        }
    }
    printObject(passwordEntry);

    //return all 5 answers to use in other function
    return passwordEntry;

}
//this function makes a random character from an array
function generateRandom(array) {
    var randomChar = Math.floor(Math.random() * array.length);
    return array[randomChar];
}

//this function return the password
function generatePassword() {
    var userChoice = passEntry();
    var characterIncluded = [];
    var final = [];
    var checkAllTypes= [];
    
    //this four if conditions, check which character type user selects and concat all chosen character types together
    //to make a merged character array to set it as an input array for generateRandom function,
    //and also push one random character of each type to checkAllType variable to make sure we have character of all 
    //selected character types in our password.
    if (userChoice.passNum){
        characterIncluded = characterIncluded.concat(numChar);
        //push one character of this type to checkAllType array
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
    //for length of user inpute password, it generates password by using generateRandom function and the function
    //parameter is an array of what we merged (with concat method) from user's answers.
    for(i=0; i<userChoice.passGen; i++){
        var characters = generateRandom(characterIncluded);
        final.push(characters);
    }
    //in this for loop we insert a character of all selected character types to make sure our password contains at 
    //least one character of all chosen sets.
    for(i=0; i<checkAllTypes.length; i++){
        //make random index of characterIncluded array, to change with checkAllType array members.
        var index = Math.floor(Math.random()*characterIncluded.length);
        characterIncluded[index] = checkAllTypes[i];
    }

    //change the final pass into string to remove `,` from password
    return final.join('');
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
