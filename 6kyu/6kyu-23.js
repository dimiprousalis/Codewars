// Complete the solution so that the function will break up camel casing, using a space between words.

//Solution
function solution(string) {
    return string.split('').map(v => v === v.toUpperCase() ? ' ' + v : v).join('')
}