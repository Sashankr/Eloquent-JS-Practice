// Values are represented in 64 bits in Javascript, which 2 ^ 64 which is 18 quantillion, 18 followed by 18 zeroes.
// If we consider the sign then 63 bits are used for numbers 1 is used for the sign.
// If we look at decimal values one bit is used for position of the decimal

var a = 10;
var b = 'Hello';
console.log('Number', a);
console.log('String',b);

// Template literal
console.log(`100 divided by 2 is ${100/2}`);
