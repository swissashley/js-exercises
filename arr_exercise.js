Array.prototype.uniq = function() {
  let i;
  let uniqArr = [];

  for (i = 0; i < this.length; i++) {
    if (!uniqArr.includes(this[i])) {
      uniqArr.push(this[i]);
    }
  }

  return uniqArr;
};

let arr = [1,2,3,3,5,5,5,1];

console.log(arr.uniq());
//======================================================================
Array.prototype.twoSum = function() {
  let i, j;
  let twoSumArr = [];
  for(i = 0; i < this.length - 1; i++) {
    for(j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        twoSumArr.push([i,j]);
      }
    }
  }
  return twoSumArr;
};

console.log([-1, 0, 2, -2, 1].twoSum());
//======================================================================

Array.prototype.transpose = function () {
  let i, j;
  let transposeArr = [];
  for(i = 0; i < this.length; i++) {
    let row = [];
    for(j = 0; j < this.length; j++) {
      row.push(this[j][i]);
    }
    transposeArr.push(row);
  }
  return transposeArr;
};
let rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];
  console.log(rows.transpose());
//======================================================================
