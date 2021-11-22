// Реализовать getter `name`, который будет отдавть имя класса

class Foo {
	get name() {
		// ...
	}
}

class Bar extends Foo {
}

class Qux extends Bar {
}

console.log('Foo:', (new Foo).name);
console.log('Bar:', (new Bar).name);
console.log('Qux:', (new Qux).name);