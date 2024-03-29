// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]


//Solution
function capitals(word) {
    return word.split('')
        .map((e, i, a) => e === e.toUpperCase() ? i : '')
        .filter(e => e !== '')
}