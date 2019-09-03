"use strict"

//olehMap
Array.prototype.olehMap = function(callback) {
  var arr = [];
  for (var i = 0; i < this.length; i++) arr.push(callback(this[i], i, this));
  return arr;
};

var mas = [
  { id: 1, name: "Vasyl" },
  { id: 2, name: "Oleh" },
  { id: 3, name: "Nazariy" },
  { id: 4, name: "Denis" }
];

var newMas = mas.olehMap(function(item) {
  return item;
});
