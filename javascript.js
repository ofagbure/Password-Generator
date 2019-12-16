
var arrayOFSpecialChars = ['@'];
var finalPassWord = '';

function myfunction() {

    var ConfirmPassword = prompt("How many characters would you like your password to have?")
    var PasswordLength = parseInt(ConfirmPassword)

    if (PasswordLength < 8 && PasswordLength > 128) {
        alert("Your password needs to be between 8 and 128 characters long")
    }
    else {
        var SpecChar = confirm("Would you like your password to have a special character?")
        var NumChar = confirm("Would you like your password to have a Number?")
        // var LowCase = confirm("Would you like your password to have a lowercase letter?")
        // var UppCase = confirm("Would you like your password to have an upper case letter?") //y
    }

    // figure out what to do if conditions are met   
    if (SpecChar) {


        for (let index = 0; index < PasswordLength; index++) {
        
            if (index === 0){
                finalPassWord+=arrayOFSpecialChars;
            } else {
                finalPassWord+=index;
            }
            
        }

         var textAreaInput = document.querySelector('textarea');
         textAreaInput.placeholder = finalPassWord;

    } else if (SpecChar && NumChar){

        console.log('Turkeys')

    } else { alert("Your password must have at least one special character, or a number, or a lower case letter or uppercase letter in order to be secure. Do you NOT want a secure password???") }

}
// define a function that creates a password based on above criteria haha
// Math.floor((Math.random() * 10) + 1)
// String abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// charLetter = abc.charLetterAt(rd.nextInt(abc.length()))