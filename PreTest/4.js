//total volume of all boxes
function totalVolume(){
    let total = 0;
    let tmp = 1;
  
    for (let cr = 0; cr < arguments.length; cr++) {
      for (let cl = 0; cl < arguments[cr].length; cl++) {
        tmp = tmp * arguments[cr][cl];
      }
      total += tmp;
      tmp = 1;
    }
  
    return total;
  
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); //63
console.log(totalVolume([2, 2, 2], [2, 1, 1])); //10
console.log(totalVolume([1, 1, 1])); //1