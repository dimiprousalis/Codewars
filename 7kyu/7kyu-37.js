// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.



//Solution
function sumNoDuplicates(numList) {
    numList = numList.sort((a, b) => a - b)
    let noDuplicates = []

    for (let i = 0; i < numList.length; i++) {
        if (numList[i] === numList[i + 1] || numList[i] === numList[i - 1]) {
            continue
        } else {
            noDuplicates.push(numList[i])
        }
    }
    return noDuplicates.reduce((a, c) => a + c, 0)
}