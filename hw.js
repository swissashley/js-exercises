//======================================================================
function printChildren(...args) {
  console.log(args[0] + " children are: ");
  for(var i = 1; i < args.length; i++) {
    console.log(args[i]);
  }
}
printChildren("George", "Cassie", "Jeff", "Roger");
//======================================================================
function addThree (a, b, c) {
  return a + b + c;
}
let arr = [1,2,3];
console.log(addThree(...arr));
//======================================================================
function dinnerTonightIs(food = "pizza") {
  console.log("The dinner tonight is " + food);
}

dinnerTonightIs("burger");
dinnerTonightIs();
//======================================================================
function titleize(names, callback) {
  var titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  callback(titleized);
}
titleize(["Mary", "Brian", "Leo"], function(names){
  names.forEach(name => console.log(name));
});
// Mx. Mary Jingleheimer Schmidt
// Mx. Brian Jingleheimer Schmidt
// Mx. Leo Jingleheimer Schmidt
//======================================================================
function Elephant (name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}
Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the Elephant goes \'Ahhhhhhhhhh\'`);
};

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
};
Elephant.prototype.play = function(){
  let aTrick = this.tricks[Math.floor(Math.random() * this.tricks.length + 1)];
  console.log(`${this.name} the ${aTrick}`);
};

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function(elephant) {
  console.log(`${elephant.name} is trotting by!`);
};

herd.forEach(elephant => Elephant.paradeHelper(elephant));
//======================================================================
function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs and bacon please.";
  console.log(order);
  return function(food) {
    order = order.slice(0, order.length - 7) + `and ` + food + " please.";
    console.log(order);
  };
}
let bfastOrder = dinerBreakfast();
bfastOrder('pizza');
bfastOrder('burger');
