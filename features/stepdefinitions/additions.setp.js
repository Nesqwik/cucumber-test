const cucumber = require('cucumber');
const add = require("../../src/calc");
const assert = require('assert-plus');


cucumber.defineSupportCode(function(that) {
    var val1;
    var val2;
    var res;

    that.Given('I have numbers {int} and {int}', function (int, int2, callback) {
        val1 = int;
        val2 = int2;

        callback();
    });

    that.When('I use add function', function (callback) {
        res = add(val1, val2);

        callback();
    });

    // OR

    that.Given('I have number {int}', function (int, callback) {
        val1 = int;

        callback();
    });

    that.When('I add this number to itself', function (callback) {
        res = add(val1, val1);

        callback();
    });


    that.Then('I should have {int} as a result', function (int, callback) {
        assert.number(int, res);

        callback();
    });


});