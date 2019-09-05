"use strict";

//olehFind
Array.prototype.olehFind = function(fn) {
  if (this == null) {
    throw new TypeError('"this" is null or not defined');
  }
  if (typeof fn !== "function") {
    throw new TypeError("the predicate must be a function");
  }
  var i = 0;
  while (i < this.length) {
    var elem = this[i];
    if (fn.call(this, elem, i, this)) {
      return elem;
    }
    i++;
  }
  return undefined;
};

var mas = [
  { id: 1, name: "Vasyl" },
  { id: 2, name: "Oleh" },
  { id: 3, name: "Nazariy" },
  { id: 4, name: "Denis" }
];

var newMas = mas.olehFind(item => item.id === 3);
