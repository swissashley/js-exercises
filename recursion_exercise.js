function rangeRec (start, end) {
  //base case
  if ((start + 1) >= end) {
    return [];
  }
  return [start + 1].concat(rangeRec(start + 1, end));
}

// console.log(rangeRec(1,10));

function sumItr (arr) {
  let sum = 0;
  arr.forEach(el => sum += el);
  return sum;
}

// console.log(sumItr([1,2,3]));

function sumRec (arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  return arr[0] + sumRec(arr.slice(1));
}

// console.log(sumRec([1,2,3]));

// =========================================

function exp1(base, exp){
  if (exp === 0) {
    return 1;
  }

  return base * exp1(base, exp - 1);
}

// console.log(exp1(2,5));

function exp2(base, exp){
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  }

  if (exp % 2 === 0) {
    return exp2(base, exp / 2) * exp2(base, exp / 2);
  } else {
    return base * exp2(base, (exp - 1) / 2) * exp2(base, (exp - 1) / 2);
  }
}

// console.log(exp2(2,5));

// ==========================================

function fib(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1,1];
  }

  let prevFib = fib(n - 1);
  let nextFib = prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2];
  prevFib.push(nextFib);
  return prevFib;
}

// console.log(fib(10));
// =====================================================
function bsearch(arr, target) {

  if (!arr.includes(target)) {
    return null;
  }

  let pivot = arr.length / 2;
  if (arr[pivot] === target) {
    return pivot;
  } else if (target > arr[pivot]) {
    return pivot + bsearch(arr.slice(pivot), target);
  } else {
    return bsearch(arr.slice(0, pivot),target);
  }
}

// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(bsearch(arr, 6));
// ==========================

function makeChange(amount, coins) {
  if (amount === 0) {
    return [];
  } else if (coins.length === 0) {
    return null;
  }


  coins.forEach(coin => {
    if (amount >= coin) {
      amount -= coin;
      console.log(amount);
      return [coin].concat(makeChange(amount, coins));
    } else {
      console.log("else" + amount);
      return makeChange(amount, coins.slice(1));
    }
  });
}

// console.log(makeChange(14,[10,7,1]));
// ==========================
function mergeSort(arr) {

  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr.length / 2;
  let left = mergeSort(arr.slice(0, pivot));
  let right = mergeSort(arr.slice(pivot));

  return merge(left, right);
}

function merge (left, right) {
  let mergedArr = [];

  while (left.length > 0 && right.length > 0) {
    left[0] > right[0] ?
    mergedArr.push(right.shift()) :
    mergedArr.push(left.shift());
  }

  return mergedArr.concat(left).concat(right);
}
// console.log(mergeSort([3,2,6,4,5,9,1]));
function subsets(arr) {
  if (arr.length === 0) {
    return [[]];
  } else if (arr.length === 1) {
    return [[], arr];
  }
  let prevSubSets = subsets(arr.slice(0, arr.length - 1));
  let returnArr = prevSubSets.slice();
  prevSubSets.forEach(el => {
    returnArr.push(el.concat([arr[arr.length - 1]]));
  });
  return returnArr;
}
console.log(subsets([1, 2, 3]));
