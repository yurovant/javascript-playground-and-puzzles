// Нужно создать экземпляр класса при помощи массива аргументов,
// не переписывая конструктор

function Sum(a, b) {
	this.result = (a || 0) + (b || 0);
}


var args = [1, 2];
var sum = new Sum(args);

console.log('result:', sum.result); // 3
console.log(sum instanceof Sum); // true
