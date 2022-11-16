//Check out https://jamestadeo.github.io/coursera/


// https://www.coursera.org/learn/html-css-javascript-for-web-developers/lecture/4tOjk/lecture-41-part-1-defining-variables-function-and-scope

//test hello - set up console
console.log("Hello World");

//traditional way to create a function
function myFunction() {
    console.log("Traditional Hello World");
}

myFunction();

//----------------------------------------

//create a function
var a = function () {
    console.log("Bonjour");
}

//call the function
a();

//----------------------------------------

//create a function with a parameter and return value
var b = function (add) {
    return 10 + add;
}

//use function
console.log("Result is: " + b(10));

//assign function value to a variable
var c = b(5);
console.log(c)

//----------------------------------------

function add(x,y){
    return x + y;
}

console.log(add(2,4)); //result: 6
var d = add(4,4);
console.log(d);

console.log(add()); //result: NaN
console.log(add); //returns function formula

//----------------------------------------

// JavaScript there's really two scopes, global scope and function, or otherwise known as lexical scope. Now lexical here means that it depends on where something is physically defined. For example, a variable that's defined within a function is physically defined within that function. There's no block scope in JavaScript. In other languages, curly braces themselves signify a new scope. In JavaScript, functions signify a new scope. That's all you really need to know about functions for now, and we're going to talk about functions in much more detail in a later lecture. Now variables and functions defined in a global scope are available everywhere. Meaning any other functions that are defined in a global scope and so on can get access to these globally defined functions and variables. As far as function and lexical scope, variables and functions defined here are available only within this function. And you heard it right, you can define functions within other functions. And those newly defined functions, have a way to get at its outer function variables and functions.

var x = 23;
var y = 27;

function A() {
    var x = 4;
    console.log(B()); //value of x in function B()
    return x;
}

function B(){
    var x = 2;
    return x;
}

console.log("Result for function A: " + A());
console.log("Result for function B: " + B());
console.log(x);
console.log(y);