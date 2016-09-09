function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  console.log(`${this.owner} loves ${this.name}`);
};

// let sam = new Cat("sam", "marc");
// let bob = new Cat("bob", "victor");

// sam.cuteStatement();
// bob.cuteStatement();

Cat.prototype.cuteStatement = function() {
  console.log(`Everyone loves ${this.name}`);
};

// sam.cuteStatement();
// bob.cuteStatement();

Cat.prototype.meow = function() {
  console.log(`${this.name} meows`);
};

// sam.meow();

// sam.meow = function () {
//   console.log(`${this.name} barks`);
// };
//
// sam.meow();
// bob.meow();

String.prototype.substrings = function () {
  let letterArr = this.split("");
  let outArr = [];

  for (let i = 0; i < letterArr.length; i++) {
    for (let j = i + 1; j <= letterArr.length; j++){
      let subword = letterArr.slice(i,j).join("");
      if (!outArr.includes(subword)) {
        outArr.push(subword);
      }
    }
  }

  return outArr;
};

console.log("cat".substrings());
