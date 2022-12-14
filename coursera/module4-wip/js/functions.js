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

//----------------------

console.log(this)

// Lecture 42, Part 1: Javascript Types https://www.coursera.org/learn/html-css-javascript-for-web-developers/lecture/4dwte/lecture-42-part-1-javascript-types

/*
JS has 7 built-in types

Object - a collection of name/value pairs

Primitive types represent a single, immutable value.
Boolean - true or false
Number - a double precision floating (no integers in JS)
String - sequence of characters
Null - signifies the lack of value vs definition
Undefined - no value set on variable
*Symbol is new to ES6 - Ecmascript 6
*/

//namespace example
Person = {} //create object
Person.name = "James";
Person.hello = function () {
    console.log(Person.name + " says hello!");
}
Person.hello();

Person.name = "Jesse";
Person.hello();

///------------------

/*
https://www.coursera.org/learn/html-css-javascript-for-web-developers/lecture/ovB9V/lecture-44-handling-default-values

Lecture 44: Handling Default Values
*/

function orderChineseFoodWith(sidedish){
    console.log("Order Chinese food with " + sidedish);
}

orderChineseFoodWith("rice!");
orderChineseFoodWith();

//add a default value
//another way to write a function
orderChineseFoodAgainWith = function (sidedish) {
    if(sidedish === undefined) {
        sidedish = "noodles!";
    }
    console.log("Order Chinese food again with " + sidedish);
}

orderChineseFoodAgainWith("chicken wings!");
orderChineseFoodAgainWith();


orderChineseFoodAgainWith2 = function (sidedish) {
    sidedish = sidedish || "whatever!"
    console.log("Order Chinese food again with " + sidedish);
}

orderChineseFoodAgainWith2("chicken wings!");
orderChineseFoodAgainWith2();

<<<<<<< Updated upstream
//Quick practice see https://www.coursera.org/learn/html-css-javascript-for-web-developers/lecture/z3Anw/lecture-45-part-2-creating-objects-using-object-literal-syntax
var myObject = {};
myObject.name = "Damian";
myObject.hair = "brown";
myObject.age = "28";

console.log(myObject.name + "is " + myObject.age + " and has " + myObject.hair + " hair.");

var myOjbect2 = {};
myName = "What is your name?";
myOjbect2.myName = "James";
console.log(myOjbect2.myName);


console.log("\n\nLECTURE 46: FUNCTIONS EXPLAINED")
//Lecture 46: Functions Explained - https://www.coursera.org/learn/html-css-javascript-for-web-developers/lecture/xCdAU
//function factory

function makeMultiplier(multiplier){
    function myFunc(x) {
        return multiplier * x; //in our example 3 is passed as the multiplier and x is the number passed by the multiplyBy3
    };
    return myFunc;
};

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));

// Lecture 48: Function Constructors, prototype, and the 'this'
// https://www.coursera.org/learn/html-css-javascript-for-web-developers/lecture/5hDX1/lecture-48-function-constructors-prototype-and-the-this-keyword

//When the function gets invoked it receives it own execution context
function test() {
    console.log(this); //points to the global window object
    this.myName = "James";
}
test();
console.log(window.myName);
console.log(this.myName);

//Function constructors can't return anything instead it returns the values of the object. Best practice is to name it with a capitial letter.
function Circle (radius){
    this.radius = radius;
    //console.log(this);
    this.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
}

//Instantiate the function object with the "new" keyword
var myCircle = new Circle(10);
console.log(myCircle);
console.log(myCircle.radius);
console.log(myCircle.getArea());

//Using the prototype property - the issue with placing the function in the function Circle is that the this.getArea function gets executed everytime. A prototype property takes care of this

//create an anonymous function
function Circle2 (radius) {
    this.radius = radius;
};
//refer to the function constructor's name
//a prototype doesn't recreate the method over and over again in memory like our previous example where the function was created in the function constructor. A prototype creates one memory space to be used and that makes our code efficient and less processing takes place.
Circle2.prototype.getArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
}

console.log(Circle2);

var myCircle2 = new Circle2(15)
console.log(myCircle2)
console.log(myCircle2.radius);
console.log(myCircle2.getArea());


console.log("\n\nLecture 49: Object Literals and the 'this' Keyword - https://www.coursera.org/learn/html-css-javascript-for-web-developers/lecture/XaYeq/lecture-49-object-literals-and-the-this-keyword");

var literalCircle = {
    radius: 10,
    getArea: function(){
        console.log(this);
    }
};

literalCircle.getArea();



console.log("\n\nLECTURE 50, Part1: Arrays");
//https://www.coursera.org/learn/html-css-javascript-for-web-developers/lecture/WWTOG/lecture-50-part-1-arrays

var myArray = ["James",
29,
function myFunc() {return "Hello";},
{passion: "programmer"}];

console.log(myArray);
console.log(myArray[2]());
console.log(myArray[3].passion);

console.log("\n\nLoop through an array");
//loop through array
for(i=0; i < myArray.length; i++){
    console.log(myArray[i]);
}

var listInfoObj = {
    name: "James",
    age: "29",
    passion: "programmer"
}
//Another way to loop through the array
for(var prop in listInfoObj){
    console.log(prop + ": " + listInfoObj[prop]);
}

console.log("\n\nLecture 52, Part 2: Immediately Invoked Function Expressions (IIFEs)");
//IIFEs - Immediately Invoked Function Expressions - https://www.coursera.org/learn/html-css-javascript-for-web-developers/lecture/DGFRL/lecture-52-part-2-immediately-invoked-function-expressions-iifes
=======
//----------------------------

/* Lecture 46: Functions Explained
 https://www.coursera.org/learn/html-css-javascript-for-web-developers/lecture/xCdAU/lecture-46-functions-explained

 Functions are first class data types. Whatever a variable or object can do, well so can a function! We can pass it as an argument. Assign it to a variable, and we can return it as a result from a function. A function is an object. This allows us to set properties to them.
 */

console.log("\n\nLecture 46: Functions Explained\n");
function multiply(x,y) {
    return x * y;
}

// console.log(multiply);
console.log(multiply(2,3));

//add a property
multiply.version = "v.1.0.0";
console.log(multiply.version);

//another way to write it - if we need to have spaces or more verbose
multiply["My Awesome Version"] = "v.1.0.1";
console.log(multiply["My Awesome Version"]);

//Function factory - a multplier maker
function makeMultiplier(multiplier){

    var myFunc = function (x) {
        return multiplier * x;
    };

    return myFunc;
};

//we created a function called multiplyBy3
var multiplyBy3 = makeMultiplier(3); //3 is what we are multiplying with
console.log(multiplyBy3(10)); //10 would be the value of x that we pass to myFunc

//we created a function called doubleAll
var doubleAll = makeMultiplier(2); //3 is what we are multiplying with
console.log(doubleAll(5)); //5 would be the value of x that we pass to myFunc

//Passing functions as arguments
//referencing functions we created earlier, in this case the multiplyBy3 and the doubleAll function
function doOperation(x, operation){
    return operation(x);
};

var result = doOperation(5, multiplyBy3);
console.log(result);
result = doOperation(100, doubleAll);
console.log(result);


/*
Lecture 47, Part 1: Passing Variables by Value vs. by Reference
https://www.coursera.org/learn/html-css-javascript-for-web-developers/lecture/6RF3x/lecture-47-part-1-passing-variables-by-value-vs-by-reference
*/
console.log("\n\nLecture 47, Part 1: Passing Variables by Value vs. by Reference");

/*
In Javascript primitives are passed by value and objects are passed by reference.
For example, if we are referring to primitives being passed, it means that whatever value is passed to a variable does NOT change the variable that passed it. With objects it's different. If we pass an object, there is a direct "link" or reference to the object. That means whatever is changed on the object passed will be reflected on the orginal object we are referencing.
*/
>>>>>>> Stashed changes
