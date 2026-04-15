// An expression is a fragment of a program.
// A statement is an expression with a semicolon at the end;
// A program is a list of statements.

// In order to keep a reference of a value or the result of an expression, we can store that in a variable, also called binding.
// Think of binding as a tentacle instead of a box, we are grabbing the value and binding it with a tentacle.
let a = 10;

// the value of this variable can be changed.
a = 20;
console.log(a); // 20

// when we declare a variable but don't assign it a value we get undefined as the default value. because the tentacle has nothing to hold on to.
let temp;
console.log(temp); // undefined


// We can define variables with var, let and const.
// var is old way of declaring variables, pre es-2015.
// let is new way of declaring variables.
// const lets us define variables whose value doesn't change.

const BASE_DAMAGE = 1.0;

// The Environment.
// It means the collection of variables and values that exist in a particular time.
// When a program starts it doesn't start empty, it has variables and functions that help to interact with the browser
// Listening to mouse and keyboard events.

// Functions
// They are a variable that bind to a program.
// We can call this program by calling, invoking or applying it.

// in browsers the prompt binding, allows us to take user input.
// the values that are supplied to the function are called arguements.
// Each function can define, how many arguements it needs.
// prompt takes a message arguement, to print what value must the user provide.
// prompt('Enter name');

// console.log prints the value that is passed to it.
// it works because, console is a binding, which exports the log binding, which is why it has access to it.
console.log("10"); 

const maxvalue = Math.max(1,2,11,3,4,29);
console.log(maxvalue); // Math.max is a function that returns the max values from a list of numbers.

// Control flow
// This can be controlled by using, if, if else, else blocks

if(maxvalue < 10){
 console.log('small');
} else if(maxvalue < 20){
  console.log('medium');
} else{
  console.log("large");
}

// Loops, we use them to repeat a set of statements until a condition is satisfied.

let count = 0;
let result = 1;
while(count < 10){
 result = result * 2;
 count++;
}
console.log('2 power 10 = ',result);

// do while is similar to while
// only difference is that it's executed at least once before checking the condition.
let name = "";
let namePrintCount = 0;
do{
 console.log('Hello');
 name = "Sashank"
 namePrintCount++;
 console.log('Hello', name);
} while(namePrintCount < 2)
