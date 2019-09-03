"use strict"

//olehReduce
Array.prototype.olehReduce = function(callback, initialVal) {
    var accumulator = (initialVal === undefined) ? undefined : initialVal;
    for (var i = 0; i < this.length; i++) {
        if (accumulator !== undefined)
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        else
            accumulator = this[i];
    }
    return accumulator;
};

var mas = [20, 20, 2, 3];
var total = mas.olehReduce(function(a, b) {
    return a + b;
}, 0);
