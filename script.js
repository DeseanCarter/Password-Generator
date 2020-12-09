// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberChar = [0,1,2,3,4,5,6,7,8,9];
var specialChar = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var passwordLength;
var uppercaseCheck;
var lowercaseCheck;
var numberCheck;
var specialCheck;

var lowerChoice;
var upperChoice;
var specialChoice;
var numberChoice;

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompts
function generatePassword() {
var options = chooseCaseAndSpecialChar();

var result = [];

//arr to store type chars to include in password
var charTypes = [];

//arr to contain one of each type 
var guranteeChar = [];

if (options.upper){
    charTypes = charTypes.concat(uppercaseChar);
  //  console.log(charTypes)
  var randomI = Math.floor(Math.random() * uppercaseChar.length );
  var randomL = uppercaseChar[randomI];
  guranteeChar.push(randomL);
};

if (options.lower){
    charTypes = charTypes.concat(lowercaseChar);
  //  console.log(charTypes)
  var randomI = Math.floor(Math.random() * lowercaseChar.length );
  var randomL = lowercaseChar[randomI];
  guranteeChar.push(randomL);
}

if (options.number){
    charTypes = charTypes.concat(numberChar);
  //  console.log(charTypes)
  var randomI = Math.floor(Math.random() * numberChar.length );
  var randomL = numberChar[randomI];
  guranteeChar.push(randomL);
}

if (options.special){
    charTypes = charTypes.concat(specialChar);
  //  console.log(charTypes)
  var randomI = Math.floor(Math.random() * specialChar.length );
  var randomL = specialChar[randomI];
  guranteeChar.push(randomL);
}

console.log("chartypes", charTypes);
console.log("gurantee", guranteeChar);

for (let i = 0; i < options.length; i++) {
   var randI =  Math.floor(Math.random() * charTypes.length );
   var char = charTypes[randI];
   console.log(char)
   result.push(char)
    
}
    console.log("res", result.join(""))
    return result.join("");
}

function chooseCaseAndSpecialChar() {
    var passwordLength = prompt("How many characters do you want your password to be? Must be between 8 - 128");

    if (passwordLength<8) {
        alert("Password must be MORE than 8 characters!");
        return;
    }
    
    if (passwordLength>128){
        alert("Password must be LESS than 128 characters!");
        return;
    }
    

    uppercaseCheck = confirm("Will your password include uppercase letters?");
    lowercaseCheck = confirm("Will your password include lowercase letters?");
    specialCheck = confirm("Will your password include special characters?");
    numberCheck = confirm("Will your password include any numbers?");
    // uppercaseCheck = str.toUppercase();
    // lowercaseCheck = str.toLowercase();
    if (uppercaseCheck === false && lowercaseCheck === false && specialCheck === false && numberCheck === false) {
        alert("You have to choose at least one chracter type");
    }

    var optionsobj = {
        length: passwordLength,
        upper: uppercaseCheck,
        lower: lowercaseCheck,
        number: numberCheck,
        special: specialCheck
    }

    return optionsobj;

}

// function newPassword() {
//     if (confirm("Will your password include uppercase letters?") === true) {
//         upperChoice = true;
//     }

//     if (confirm("Will your password include lowercase letters?") === true) {
//         lowerChoice = true;
//     }

//     if (confirm("Will your password include special characters?") === true) {
//         specialChoice = true;
//     }

//     if (confirm("Will your password include any numbers?") === true) {
//         numberChoice = true;
//     }

// }