// Values are represented in 64 bits in Javascript, which 2 ^ 64 which is 18 quantillion, 18 followed by 18 zeroes.
// If we consider the sign then 63 bits are used for numbers 1 is used for the sign.
// If we look at decimal values one bit is used for position of the decimal

var a = 10;
var b = 'Hello';
console.log('Number', a);
console.log('String',b);

// Template literal
console.log(`100 divided by 2 is ${100/2}`);
// Strings are also a sequence of bits in memory, however, each character
of the string has been assigned a value, this is called the Unicode representa-
tion, Strings are represented in 16 bits, and 2 power 16 combinations can be
represented using the strings.
This however poses challenges when using emoji's, because each emoji, takes up
two bits.
// Unary operator
console.log(typeof 10);
console.log(-a);

