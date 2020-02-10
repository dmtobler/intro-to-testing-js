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


