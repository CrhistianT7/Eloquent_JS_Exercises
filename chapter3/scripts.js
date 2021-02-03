/** Minimun */

function min(number1 = 0, number2 = 1) {
    return number1 > number2 ? number2 : number1;
}
//  console.log(min(100,69));


/** Recursion */

function isEven(number = 0){
     if (number === 0) return true;
     if (number === 1) return false;
     return number < 0 ? isEven(number + 2) : isEven(number - 2);
    //  return isEven(number - 2);
 }
// console.log(isEven(75));

/** Bean Counting */

function countBs(string = "", key = 'B') {
    const stringLength = string.length;
    let count = 0;
    for(let i = 0; i < stringLength; i++) {
        if (string[i] === key) count += 1;
    }   
    return count;
}

// console.log(countBs("kakkerlak", "k"));