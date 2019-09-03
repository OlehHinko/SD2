"use strict"

//olehForEach
Array.prototype.olehForEach = function(callback) {
    for (var i = 0; i < this.length; i++) callback(this[i], i, this);
  };
  
  var mas = [2, 5, 4, 7, 8, 9, 14];
  
  mas.olehForEach(function(item, index) {
      console.log("index:" + index + " " + "value:" + item * 2);
  });