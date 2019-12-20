
var arrayOFSpecialChars = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', '@', '['];
var arrayOFNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var arrayOFLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var finalPassWord = '';
var possibleChars = [];
var guaranteedChars = [];

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

    function getRandom(arr) {
        var index = Math.floor(Math.random() * arr.length) - 1;
        return arr[index]
    }

    if (SpecChar) {

        possibleChars = possibleChars.concat(arrayOFSpecialChars)
        guaranteedChars = guaranteedChars.concat(getRandom(arrayOFSpecialChars))
    }

    if (NumChar) {
        possibleChars = possibleChars.concat(arrayOFNum)
        guaranteedChars = guaranteedChars.concat(getRandom(arrayOFNum))
    }
    if (LowCase) {
        possibleChars = possibleChars.concat(arrayOFLetters)
        guaranteedChars = guaranteedChars.concat(getRandom(arrayOFLetters).toLowerCase())
    }

    if (UppCase) {
        possibleChars = possibleChars.concat(arrayOFLetters)
        guaranteedChars = guaranteedChars.concat(getRandom(arrayOFLetters).toUpperCase())
    }
    var newLength = PasswordLength - guaranteedChars.length

    for (let index = 0; index < newLength; index++) {
        guaranteedChars.push(getRandom(possibleChars))
    }

    var textAreaInput = document.getElementById("password");
    textAreaInput.value = guaranteedChars.join("")

    // test for if all parameters are not met
// if (SpecChar != && NumChar != && LowCase != && UppCase !=) { alert("Your password must have at least one special character, or a number, or a lower case letter or uppercase letter in order to be secure. Do you NOT want a secure password???") }

// }

function afunction() {
    var textElement = document.getElementById("password");
    textElement.select();
    textElement.setSelectionRange(1, 128);
    document.execCommand("copy");

    if (textElement.placeholder.length > 0) {
        alert("Copied text to clipboard")
    }
    else {
        alert("You need to generate a password to copy")
    }
}
}