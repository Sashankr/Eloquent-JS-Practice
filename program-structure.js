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



