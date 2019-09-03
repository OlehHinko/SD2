"use strict"

//olehEvery
Array.prototype.olehEvery = function(callback, context) {
    for (var i = 0; i < this.length; i++) {
      if (!callback.call(context, this[i], i, this)) return false;
    }
    return true;
  };
  
  var mas = [12, 5, 8, 130, 44];

  var newMas = mas.olehEvery(function(element) {
    return element >= 10;
  });
  
  var mas2 = [12, 54, 18, 130, 44]
  
  var newMas2 = mas2.olehEvery(function(element) {
    return element >= 10;
  });