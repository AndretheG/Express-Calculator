const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const { convertAndValidateNumsArray, findMean, findMedian, findMode } = require('./helpers');

app.get("/mean", function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError("Nums separated by a comma a required", 400)
    }
    let numStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        result: findMean(nums)
    }

    return res.send(result);
});

app.get("/median", function(req, res, next) {
    if (!req.query.nums) {throw new ExpressError("Nums separated by a comma a required", 400)
    }
    let numStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "median",
        result: findMedian(nums)
    }

    return res.send(result)
});

app.get("/mode", function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError("Nums separated by a comma a required", 400)
    }
    let numStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numStrings);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mode",
        result: findMode(nums)
    }

    return res.send(result);
});

// If no other route matches, respond with 404

app.use(function ( req, res, next) {
    const err = new ExpressError("Not Found", 404);

    return next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});

app.listen(3000, function () {
    console.log(`Server running on port 3000`);
});