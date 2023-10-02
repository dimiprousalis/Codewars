// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"


//Solution
var encryptThis = function (text) {
    let words = text.split(' ')
    let answer = []

    for (let i = 0; i < words.length; i++) {
        let letters = words[i].split('')
        letters[0] = words[i].charCodeAt(0)
        letters[1] = words[i][words[i].length -1]
        letters[letters.length - 1] = words[i][1]
        answer.push(letters.join(''))
    }
    return answer.join(' ')
}