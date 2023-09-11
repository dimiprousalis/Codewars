// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


//Solution
function rot13(message) {
    message = message.split("")

    for (let i = 0; i < message.length; i++) {
        //Uppercase letters
        if (message[i].charCodeAt(0) >= 65 && message[i].charCodeAt(0) <= 90) {
            let code = message[i].charCodeAt(0) + 13
            let newCode = code > 90 ? code - 26 : code
            message[i] = String.fromCharCode(newCode)
            //Lowercase letters
        } else if (message[i].charCodeAt(0) >= 97 && message[i].charCodeAt(0) <= 122) {
            let code = message[i].charCodeAt(0) + 13
            let newCode = code > 122 ? code - 26 : code
            message[i] = String.fromCharCode(newCode)
        } else {
            message[i] = message[i]
        }
    }
    
    return message.join('')
}