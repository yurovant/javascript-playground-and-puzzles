/**
 * Получение свойства объекта
 * @param {object} src
 * @param {string} path
 */
function get(src, path) {
}

var fixture = {
	foo: {
		bar: [
			{qux: 'bingo'},
		],
	},
};

// Проверка
console.log(get(fixture, 'foo.bar.0.qux') === 'bingo');
