// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


//Solution
function duplicateEncode(word) {
    word = word.toLowerCase();
    let newWord = [];
    for (let i = 0; i < word.length; i++) {
        if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
            newWord[i] = "("
        } else {
            newWord[i] = ")"
        }
    }
    return newWord.join('');
}


//Sample Test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Duplicate Encoder", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(duplicateEncode("din"), "(((");
        assert.strictEqual(duplicateEncode("recede"), "()()()");
        assert.strictEqual(duplicateEncode("Success"), ")())())", "should ignore case");
        assert.strictEqual(duplicateEncode("(( @"), "))((");
    });
});