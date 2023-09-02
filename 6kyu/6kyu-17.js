// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.



//Solution
function findOutlier(integers) {
    const evens = integers.filter(v => v % 2 === 0)
    const odds = integers.filter(v => v % 2 !== 0)

    return evens.length > odds.length ? odds[0] : evens[0]
}