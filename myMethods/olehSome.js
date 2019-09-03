"use strict"

//olehSome
Array.prototype.olehSome = function(callback, context) {
    for (var i = 0; i < this.length; i++) {
      if (callback.call(context, this[i], i, this)) return true;
    }
    return false;
  };
  
  var mas = [12, 5, 8, 130, 44]
  
  var newMas = mas.olehSome(function(element) {
    return element >= 200;
  });
  
  var mas2 = [12, 15, 38, 13, 144]
  
  var newMas2 = mas2.olehSome(function(element) {
    return element >= 100;
  });