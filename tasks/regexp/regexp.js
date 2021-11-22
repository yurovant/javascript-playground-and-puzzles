// Доработать регулярное выражение на основе существующего (без copy-paste)
var r_09 = /[0-9]+/;
var r_sign = /[-+]/;
var r_sign09 = /^$/; // доработать используя r_sign и r_09


console.log(r_sign09.test('0')); // true
console.log(r_sign09.test('-123')); // true
console.log(r_sign09.test('+345')); // true
console.log(r_sign09.test('123+345')); // false
console.log(r_sign09.test('345+')); // false
console.log(r_sign09.test('x123')); // false
