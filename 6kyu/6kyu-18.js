// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.



//Solution
function high(x) {
    const arr = x.split(' ')

    //create map of alphabet with value
    const alphabet = new Map
    for (let i = 1; i <= 26; i++) {
        alphabet.set(String.fromCharCode(i + 96), i)
    }

    //create empty array to keep track of scores
    let scores = []

    //loop through and add total scores for each word to scores array 
    for (let i = 0; i < arr.length; i++) {
        scores.push(arr[i].split('').map(v => alphabet.get(v)).reduce((a, c) => a + c, 0))
    }

    //find the index of the highest score and return the word
    return arr[scores.indexOf(Math.max(...scores))]
}