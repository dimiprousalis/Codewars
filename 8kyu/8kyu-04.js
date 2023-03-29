//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

//Solution

var min = function (list) {
    return Math.min.apply(null, list)
}

var max = function (list) {
    return Math.max.apply(null, list)
}



//Sample Test

const Test = require('@codewars/test-compat');

describe("Test", function () {
    it("Examples", function () {
        Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
        Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
        Test.assertEquals(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
        Test.assertEquals(max([5]), 5);
    });
});