"use strict"

//olehFilter
Array.prototype.olehFilter = function(callback, context) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
      if (callback.call(context, this[i], i, this)) arr.push(this[i]);
    }
    return arr;
  };
  
  var mas = [1, 2, 3, 4];
  
  var newMas = mas.olehFilter(function(n) {
    return n >= 2;
  });