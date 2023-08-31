// Frequency counter object from an array

function createFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
}

//Find the Mean for an array

function findMean(nums) {
    if(nums.length === 0) return 0;
    return nums.reduce(function (acc, cur) {
        return acc + cur;
    }) / nums.length
}

// Find the Median for an array

function findMedian(nums) {
    nums.sort((a, b) => a - b);

    let middleIndex = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    } else {
        median = nums[middleIndex];
    }
    return median
}

//Find the mode for an array

function findMode(arr) {
    let freqCounter = createFrequencyCounter(arr);

    let count = 0;
    let mostFrequent;

    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
            mostFrequent = key;
            count = freqCounter[key];
        }
    }

    return +mostFrequent;
}

// Converts an array of strings to an array of numbers

function convertAndValidateNumsArray(numStrings) {
    let result = [];

    for (let i = 0; i < numStrings; i++) {
        let valtoNum = Number(numStrings[i]);

        if (Number.isNaN(valtoNum)) {
            return new Error(
                `The value '${numStrings}' at index ${i} is not a valid number`
            );
        }

        result.push(valtoNum);
    }
    return result;
}

module.exports = {
    createFrequencyCounter,
    findMean,
    findMedian,
    findMode,
    convertAndValidateNumsArray
};