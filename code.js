// helloWorld function

// function helloWorld() {
//     return "Hello, World!";
// }

const helloWorld = function() {
    return "Hello, World!";
}

// sayHello function

function sayHello(input){

    if(!isNaN(input) || typeof input !== "string") {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

// isFive function

function isFive(input) {
    return parseFloat(input) === 5;
}

// isEven function

function isEven(input) {

    if (typeof input === "boolean") {
        return false;
    } else {
        return input % 2 === 0;
    }
}

// isVowel function

function isVowel(input) {
    switch (typeof input === "string" && input.toUpperCase()) {
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
            return true;
        default:
            return false;
    }
}