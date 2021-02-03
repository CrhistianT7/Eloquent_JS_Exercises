/** The sum of a range */

function range(start = 1, end = 10, step = start < end ? 1 : -1) {
    let output = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            output.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            output.push(i);
        }
    }
    return output;
}

// console.log(range(290, 300));


function sum(array = []){
    const arrLength = array.length;
    let accumulator = 0;
    for( let i = 0; i < arrLength; i++) {
        accumulator += array[i];
    }
    return accumulator;
}

// console.log(sum(range(1, 10)));

/** Reversing an Array */

function reverseArray(array = []) {
    const arrayLength = array.length;
    let newArray = []
    for(let i = arrayLength - 1 ; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}

// console.log(reverseArray([1,2,3,4]));

function reverseArrayInPlace(array = []) {
    const arrayLength = array.length;
    for (let i = 0; i < Math.floor((arrayLength) / 2); i++){
        let temp =  array[i];
        array[i] = array [arrayLength - i - 1]
        array [arrayLength - i - 1] = temp;
    }
    return array;
}

// console.log(reverseArrayInPlace([1,2,3,4]));

/** A List */

function arrayToList(array = []){
    const arrayLength = array.length;
    let list = null;
    for( let i = arrayLength - 1; i >= 0; i--) {
        list = {value: array[i], rest: list}
    }   
    return list;
}

//console.log(arrayToList([10, 20]))

function listToArray(list = null) {
    let array = []
    for (let node = list; node; node = node.rest) {
        array.push(node.value)
    }
    return array;
}

function prepend(value, list) {
    return {value, rest: list}
}

function nth(list, number) {
    if(!list) return undefined;
    else if (number === 0) return list.value;
    else return nth(list.rest, number - 1);
}
// console.log(arrayToList([1,2,3,4]));

// console.log(listToArray(arrayToList([10, 20, 30])));
// console.log(nth(arrayToList([10, 20, 30]), 0));

/** Deep Comparison */

function deepEqual(value1 = null, value2 = null) {
    if (value1 === value2) return true;
    if (value1 !== null && value2 !== null && typeof value1 === "object" && typeof value2 === "object") {
        let keysV1 = Object.keys(value1);
        let keysV2 = Object.keys(value2);
        if ( keysV1.length !== keysV2.length) return false;
        for ( let i = 0; i < keysV1.length; i++){
            if(!keysV2.includes(keysV1[i]) || !deepEqual(value1[keysV1[i]], value2[keysV1[i]])) {
                return false;
            }
        }
        return true;
    } else return false;
}
// const j = {
//     a: 5,
//     b: 7,
// } 
// const m = {
//     b: 7,
//     a: 5
// }
console.log(deepEqual(j, m))
// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true