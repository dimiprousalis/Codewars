// Given a string, determine if it's a valid identifier.

// Here is the syntax for valid identifiers:
// Each identifier must have at least one character.
// The first character must be picked from: alpha, underscore, or dollar sign. The first character cannot be a digit.
// The rest of the characters (besides the first) can be from: alpha, digit, underscore, or dollar sign. In other words, it can be any valid identifier character.
// Examples of valid identifiers:
// i
// wo_rd
// b2h
// Examples of invalid identifiers:
// 1i
// wo rd
// !b2h


//Solution
function isValid(idn) {
    let arr = idn.toUpperCase().split('')
    let validSigns = ['$', '_']
    let validNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    if (arr.includes(' ') || arr.length === 0 || validNums.includes(arr[0])) {
        return false
    }

    for (let i = 0; i < arr.length; i++) {
        if (validSigns.includes(arr[i]) || validNums.includes(arr[i]) || arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90) {
            continue
        } else {
            return false
        }
    }
    return true
}