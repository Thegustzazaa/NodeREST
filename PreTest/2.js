//highest digit
function highestDigit(num) {
    let text = num.toString().split('');
    let max = '0' ;
    for(let n = 0 ; n < text.length ; n++) {
        if(max < text[n]){ 
            max = text[n];
        }
    }
    return max;
} 


console.log(highestDigit(379));//9
console.log(highestDigit(2));//2
console.log(highestDigit(377401));//7
console.log(highestDigit(10234));//4