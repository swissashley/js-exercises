Array.prototype.myEach = function (callback) {
  let i;
  for(i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return this;
};

Array.prototype.myEach = function (block) {
  for (var i = 0; i < this.length; i++) {
    block(this[i]);
  }
  return this;
};
function addOne(num){
  return num + 1;
}
// console.log("Test1: ");
// [0, 1 ,2, 3, 4].myEach(Math.sqrt);
// console.log("Test2: ");
// [0, 1 ,2, 3, 4].myEach(addOne);
// ---------------------------------------------------
Array.prototype.myMap = function (callback) {
  let mapArr = [];

  this.myEach(function(el) {
    mapArr.push(callback(el));
  });

  return mapArr;
};
Array.prototype.myMap = function (callback) {
  let mapArr = [];
  this.myEach((el) => {
    mapArr.push(callback([el]));
  });
  return mapArr;
};

function minusOne(num){
  return num - 1;
}
// console.log("myMap Test1: ");
// console.log([0, 1 ,2, 3, 4].myMap(Math.sqrt));
// console.log("myMap Test2: ");
// console.log([0, 1 ,2, 3, 4].myMap(minusOne));
// ---------------------------------------------------
Array.prototype.myInject = function(callback, accumulator = null) {

  this.myEach( (el) => {
    if (accumulator === null) {
      accumulator = el;
    } else {
      accumulator = callback(accumulator, el);
    }
  });

  return accumulator;
};

let arr = [1,2,3,4];

function sum(num1, num2){
  return num1 + num2;
}

console.log(arr.myInject(sum, 5)); // 15
console.log(arr.myInject(sum)); // 10
