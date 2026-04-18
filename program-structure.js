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
} while(namePrintCount < 2);

// for loop. it's similar to while but , the initialization, condition and increment are all passed in a single line
let result2 = 1;
for(let i=0;i<10;i++){
 result2 = result2 * 2;
}

console.log(result2);

// we can use the break and continue to exit early or continue to the next iteration respectively.

// switch control flow, it helps us in cases where multiple if, else if are added one after the other.
let currentItem = "ice-cream";
let price = 0;
switch(currentItem){
  case "ice-cream" : 
    price = 30;
    break;
  case "chocolate":
    price = 20;
    break;
  default :
    price = 10;
    break;
}
console.log(currentItem,price);

// Exercises.

/*
 * Print this
#
##
###
####
#####
######
####### 
*/

let str=""
for(let i=0;i<6;i++){
  str +='#'
  console.log(`${str}\n`);
  

}

// Fizzbuzz
/*
Write a program that uses console.log to print all the numbers from 1
to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
instead of the number, and for numbers divisible by 5 (and not 3), print
"Buzz" instead.
When you have that working, modify your program to print "FizzBuzz
" for numbers that are divisible by both 3 and 5 (and still print "Fizz"
or "Buzz" for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed
out a significant percentage of programmer candidates. So if you solved
it, your labor market value just went up.)

Pseudo code
loop for 100
current num % 3 === 0, return Fizz
current num % 3 !== 0 && current num % 5 === 0, return Buzz

current num % 3 === 0 && current num % 5 === 0
return FizzBuzz
*/

for(let i=1;i<=100;i++){
 if(i%3===0 && i%5===0){
   console.log("FizzBuzz");
  } else if (i%3 ===0){
    console.log("Fizz")
  } else if(i%5===0){
    console.log("Buzz");
  } else{
    console.log(i);
  }
}


