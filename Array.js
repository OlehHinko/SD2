//head mas2
var mas = [2, 5, 4, 7, 8, 9, 14];
document.write(mas + " " + "//head mas" + "<br/>" + "<br/>");

//push
var mas = [2, 5, 4, 7, 8, 9, 14];
var push = mas.push(6);
document.write(mas + " " + "//push(6)" + "<br/>" + "<br/>");

//pop
var mas2 = [2, 5, 4, 7, 8, 9, 14];
var pop = mas2.pop();
document.write(mas2 + " " + "//pop" + "<br/>" + "<br/>");

//shift
var mas3 = [2, 5, 4, 7, 8, 9, 14];
var shift = mas3.shift();
document.write(mas3 + " " + "//shift" + "<br/>" + "<br/>");

//unshift
var mas4 = [2, 5, 4, 7, 8, 9, 14];
var unshift = mas4.unshift(6);
document.write(mas4 + " " + "//unshift" + "<br/>" + "<br/>");

//splice
var mas5 = [2, 5, 4, 7, 8, 9, 14];
document.write(mas5 + "<br/>");
var spliceDeleteAdd = mas5.splice(0, 1, 0);
document.write(
  mas5 + " " + "//splice(0,1,0)" + "<br/>" + spliceDeleteAdd + "<br/>"
);
var spliceDelete = mas5.splice(0, 2);
document.write(
  mas5 + " " + "//splice(0,2)" + "<br/>" + spliceDelete + "<br/>" + "<br/>"
);

//slice
var mas6 = [2, 5, 4, 7, 8, 9, 14];
document.write(mas6 + "<br/>");
var slice = mas6.slice(0, 1);
document.write(
  mas6 + " " + "//slice(0,1)" + "<br/>" + slice + "<br/>" + "<br/>"
);

//concat
var mas7 = [2, 5, 4, 7, 8, 9, 14];
var mas8 = [1, 1, 1, 1];
document.write(mas7 + "<br/>" + mas8 + "<br/>");
var concat = mas7.concat(mas8);
document.write(concat + " " + "//concat" + "<br/>" + "<br/>");

//forEach
var mas9 = [2, 5, 4, 7, 8, 9, 14];
document.write(mas9 + " " + "//forEach" + "<br/>");
var forEach = mas9.forEach((item, index, mas) => {
  document.write(`індекс: ${index}  значення: ${item} <br/> `);
});

//search in mas

//indexOf/lastIndexOf
var mas10 = [2, 5, 4, 7, 8, 9, 14];
var indexOf = mas10.indexOf(9);
document.write(
  "<br/>" + mas10 + "<br/>" + indexOf + " " + "//indexOf(9)" + "<br/>"
);
var indexOf2 = mas10.indexOf(10);
document.write(mas10 + "<br/>" + indexOf2 + " " + "//indexOf(10)" + "<br/>");
var lastIndexOf = mas10.indexOf(9);
document.write(
  mas10 +
    "<br/>" +
    lastIndexOf +
    " " +
    "//lastIndexOf(9)" +
    " " +
    "<br/>" +
    "<br/>"
);

//includes
var mas11 = [2, 5, 4, 7, 8, 9, 14];
var includes = mas10.includes(9);
document.write(mas11 + "<br/>" + includes + " " + "//includes(9)" + "<br/>");
var includes2 = mas11.includes(10);
document.write(includes2 + " " + "//includes(10)" + "<br/>" + "<br/  >");

//find/findIndex
var mas12 = [
  { id: 1, name: "Vasyl" },
  { id: 2, name: "Oleh" },
  { id: 3, name: "Nazariy" },
  { id: 4, name: "Denis" }
];
mas12.forEach((item, index, mas) =>
  document.write(`id: ${item.id} name: ${item.name} <br/>`)
);
var find = mas12.find(item => item.id === 3);
document.write(`id: ${find.id}  name: ${find.name}  //find(id = 3)  <br/>`);
var find2 = mas12.find(item => item.id === 5);
document.write(`${find2}  //find(id = 5)  <br/>`);
var findIndex = mas12.findIndex(item => item.id === 3);
document.write(`index: ${findIndex}  //findIndex(id = 3)  <br/>`);
var findIndex2 = mas12.findIndex(item => item.id === 5);
document.write(`${findIndex2}  //findIndex(id = 5)  <br/> <br/>`);

//filter
var mas13 = [
  { id: 1, name: "Vasyl" },
  { id: 2, name: "Oleh" },
  { id: 3, name: "Nazariy" },
  { id: 4, name: "Denis" }
];
mas13.forEach((item, index, mas) =>
  document.write(`id: ${item.id} name: ${item.name} <br/>`)
);
var filter = mas12.filter(item => item.id > 1);
filter.forEach(item =>
  document.write(`id: ${item.id}  name: ${item.name}  //filter(id > 1)  <br/>`)
);
var filter2 = mas12.find(item => item.id > 6);
document.write(`${filter2}  //find(id > 6)  <br/> <br/>`);

//every
var mas14 = [
  { id: 1, name: "Vasyl" },
  { id: 2, name: "Oleh" },
  { id: 3, name: "Nazariy" },
  { id: 4, name: "Denis" }
];
mas14.forEach((item, index, mas) =>
  document.write(`id: ${item.id} name: ${item.name} <br/>`)
);
var every = mas14.every(item => item.id < 6);
document.write(`${every}  //evety(id < 6)  <br/>`);
var every2 = mas14.every(item => item.id < 4);
document.write(`${every2}  //every(id < 4)  <br/> <br/>`);

//some
var mas15 = [
  { id: 1, name: "Vasyl" },
  { id: 2, name: "Oleh" },
  { id: 3, name: "Nazariy" },
  { id: 4, name: "Denis" }
];
mas15.forEach((item, index, mas) =>
  document.write(`id: ${item.id} name: ${item.name} <br/>`)
);
var some = mas15.some(item => item.id < 6);
document.write(`${some}  //some(id < 6)  <br/>`);
var some2 = mas15.every(item => item.id < 1);
document.write(`${some2}  //some(id < 1)  <br/> <br/>`);

//map
var mas16 = [
  { id: 1, name: "Vasyl" },
  { id: 2, name: "Oleh" },
  { id: 3, name: "Nazariy" },
  { id: 4, name: "Denis" }
];
mas16.forEach((item, index, mas) =>
  document.write(`id: ${item.id} name: ${item.name} <br/>`)
);
var map = mas16.map(item => ({
  id: item.id + 1,
  name: item.name
}));
map.forEach(item =>
  document.write(`id: ${item.id}  name: ${item.name}  //map(id + 1)  <br/>`)
);

//sort
var mas17 = [1, 8, 10, 3, 5, 10, 7, 21, 12];
document.write("<br/>" + mas17 + "<br/>");
mas17.sort((a, b) => a - b);
document.write(mas17 + " " + "//sort" + "<br/>" + "<br/>");

//reverse
var mas18 = [1, 8, 10, 3, 5, 10, 7, 21, 12];
document.write(mas18 + "<br/>");
mas18.reverse();
document.write(mas18 + " " + "//reverse" + "<br/>" + "<br/>");

//split/join
var mas19 = ["Petro", "Denis", "Vasyl"];
document.write(mas19 + "<br/>");
let join = mas19.join(";");
document.write(`${join} //join(';') <br/>`);
document.write(`${typeof join} //type of <br/> <br/>`);
let split = join.split();
document.write(`${split} //split() <br/>`);
document.write(`${typeof split} //type of <br/> <br/>`);

//reduse
var mas20 = [1, 8, 10, 3, 5, 10, 7, 21, 12];
document.write(mas20 + "<br/>");
const reduse = mas20.reduce((sum, item) => sum + item, 0);
document.write(reduse + " " + "//reduse() " + "<br/>" + "<br/>");