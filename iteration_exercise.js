function factors (num) {
  if (num === 0) {
    return [];
  } else if (num < 0) {
    throw "N < 0!";
  }
  let factorArr = [];
  for(let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factorArr.push(i);
    }
  }
  return factorArr;
}

// console.log(factors(10)); //[1,2,5,10]
// console.log(factors(0)); //[]
// console.log(factors(-1));
// ======================================================

function bubbleSort (arr) {
  let isSorted = true;
  if (arr.length <= 1) {
    return arr;
  }
  while (isSorted) {
    isSorted = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        let j = i + 1;
        arr[i] = arr[j];
        arr[j] = temp;
        isSorted = true;
      }
    }
  }
  return arr;
}

let arr = [6,4,8,11,2,8,0,7,33];
console.log(bubbleSort(arr));

// ================================================

function substrings(str) {
  let letterArr = str.split("");
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
}

console.log(substrings("caaac"));
