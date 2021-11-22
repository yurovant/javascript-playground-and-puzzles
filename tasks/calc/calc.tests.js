({
	"calc('2 + 2')": function () {
		return [calc('2 + 2'), 4];
	},

	"calc('1 + 2 * 3')": function () {
		return [calc('1 + 2 * 3'), 7];
	},

	"calc('(3 + 7) / (5 - (2 + 1))')": function () {
		return [calc('(3 + 7) / (5 - (2 + 1))'), 5];
	},

	"calc('1 + ((2 + 3) * 5 + 3) * 7')": function () {
		return [calc('1 + ((2 + 3) * 5 + 3) * 7'), 197];
	}
})
