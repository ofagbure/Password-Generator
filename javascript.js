
var arrayOFSpecialChars = ['!','#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', '@', '['];
var arrayOFNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var arrayOFLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var finalPassWord = '';

function myfunction() {

    var ConfirmPassword = prompt("How many characters would you like your password to have?")
    var PasswordLength = parseInt(ConfirmPassword)

    if (PasswordLength < 8 || PasswordLength > 128) {
        alert("Your password needs to be between 8 and 128 characters long")
    }
    else {
        var SpecChar = confirm("Would you like your password to have a special character?")
        var NumChar = confirm("Would you like your password to have a Number?")
        var LowCase = confirm("Would you like your password to have a lowercase letter?")
        var UppCase = confirm("Would you like your password to have an upper case letter?") 
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

    } else if (NumChar){

        for (let index = 0; index < PasswordLength; index++) {
        
            if (index === 0){
                finalPassWord+=arrayOFNum;
            } else {
                finalPassWord+=index;
            }
            
        }
        var textAreaInput = document.querySelector('textarea');
        textAreaInput.placeholder = finalPassWord;

    } else if (LowCase) {
        for (let index = 0; index < PasswordLength; index++) {
        
            if (index === 0){
                finalPassWord+=arrayOFLetters.toLowerCase();
            } else {
                finalPassWord+=index;
            }
            
        }
        var textAreaInput = document.querySelector('textarea');
        textAreaInput.placeholder = finalPassWord;

    } else if (UppCase) {
        for (let index = 0; index < PasswordLength; index++) {
        
            if (index === 0){
                finalPassWord+=arrayOFLetters.toUpperCase();
            } else {
                finalPassWord+=index;
            }
            
        }
        var textAreaInput = document.querySelector('textarea');
        textAreaInput.placeholder = finalPassWord;


    } else { alert("Your password must have at least one special character, or a number, or a lower case letter or uppercase letter in order to be secure. Do you NOT want a secure password???") }

}

function afunction() {
var copyText = finalPassWord;
    document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}
