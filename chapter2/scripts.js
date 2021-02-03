/** 1. Looping a triagle */

function drawTriangles(deep = 1) {
    for (let line = "#"; line.length <= deep; line += "#") {
        console.log(line);
    }
}

// drawTriangles(5)

/** FizzBuzz */

function fizzBuzz(firstNumber = 1, lastNumber = 100) {
    for(let number = firstNumber; number < lastNumber; number++) {
        let output = "";
        if (number % 3 === 0) output += 'Fizz';
        if (number % 5 === 0) output += 'Buzz';
        output === "" ? console.log(number) : console.log(output);
    }
}

// fizzBuzz()

/** Chessboard */

function chessBoard(witdh = 8, heigth = 8) {
    let board = "";
    for( let i = 0; i < heigth; i++){
        for (let j = 0; j <witdh; j++) {
            (i + j) % 2 === 0 
            ? board += " "
            : board += "#";
        }
        board += '\n';
    }
    console.log(board)
}

// chessBoard()