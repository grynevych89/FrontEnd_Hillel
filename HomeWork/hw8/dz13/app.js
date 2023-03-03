function sumFunction () {
  let n = 0;
  return function getSum (val = 0) {
      return n += val;
  }
}

const sum = sumFunction();

console.log(sum(3)) // 3
console.log(sum(5)) // 8 
console.log(sum(20)) // 28
