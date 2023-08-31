const {
    findMean,
    findMedian,
    findMode,
} = require("./helpers");

describe("#findMean", function () {
    it("finds the mean of an empty array", function () {
        expect(findMean([])).toEqual(0)
    })
    it("finds the mean of an array of numbers", function () {
        expect(findMean([3,6,2,-4])).toEqual(1.75)
    })
})

describe("#findMedian", function () {
    it("finds the median of an even set", function () {
        expect(findMedian([1, -1, 4, 2])).toEqual(1.5)
    })
    it("finds the median of an odd set", function () {
        expect(findMedian([1, -1, 4])).toEqual(1)
    })
})

describe("#findMode", function () {
    it("finds the mode", function () {
        expect(findMode([4,4,4,4,5,6,7,7,])).toEqual(4)
    })
})