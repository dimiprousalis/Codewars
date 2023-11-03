// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""


//Solution
function cleanString(s) {
    let result = []
    for (let e of s) {
        e === "#" ? result.pop() : result.push(e)
    }
    return result.join('')
}