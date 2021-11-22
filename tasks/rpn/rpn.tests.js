({
	"calc(4 7 + 1 -)": function () {
		return [calc('4 7 + 1 -'), 10]; // 10
	},

	"calc(12 8 5 - / 5 2 * + 14 /)": function () {
		return [calc('12 8 5 - / 5 2 * + 14 /'), 1];
	},

	"calc(10 5 / 2 10 + - -0.5 *)": function () {
		return [calc('10 5 / 2 10 + - -0.5 *'), 5];
	},

	"calc(3 6 8 * + 10 -)": function () {
		return [calc('3 6 8 * + 10 -'), 41];
	}
})
